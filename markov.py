#!/usr/bin/env python
# -*- coding: utf-8 -*-
import webapp2
import os
from google.appengine.ext.webapp import template
from xml.etree.ElementTree import *
import re

import urllib

class Markov(webapp2.RequestHandler):
	def get(self):
		mes=""
		mes=self.get_hotentry_title()
		
		template_values={
		'mes':mes
		}
		path = os.path.join(os.path.dirname(__file__), 'html/markov.html')
		self.response.out.write(template.render(path, template_values))
		
	def get_hotentry_title(self):
		titles = ""
		tree = parse(urllib.urlopen('http://feeds.feedburner.com/hatena/b/hotentry'))
		for i in tree.findall('./{http://purl.org/rss/1.0/}item'):
			titles+= re.sub("[-:|/｜：].{1,30}$","",i.find('{http://purl.org/rss/1.0/}title').text) + "\n"
		return titles
		
	def get_2ch(self):
		titles = ""
		response = urllib.urlopen('https://leia.5ch.net/poverty/subject.txt')
		html = unicode(response.read(), "cp932", 'ignore').encode("utf-8")
		for line in html.split("\n"):
			if line != "":
				titles+=re.sub("\(.*?\)$","",line.split("<>", 2)[1])+ "\n"
		return titles
		
app = webapp2.WSGIApplication([
	('/markov.html', Markov)
], debug=True)