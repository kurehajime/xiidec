#!/usr/bin/env python
# -*- coding: utf-8 -*-
import webapp2
import os
import urllib
from google.appengine.ext.webapp import template
from datetime import datetime, timedelta
from xml.etree.ElementTree import *


class VsChart(webapp2.RequestHandler):
	def get(self):
		if self.request.get('q')!="":
			url=self.get_hatebu_chart_url(self.request.get('q').replace(" ",",").split(","))
		else:
			url=""
		q=self.request.get('q')
		template_values={
		'url':url,
		'q':q
		}
		path = os.path.join(os.path.dirname(__file__), 'html/vschart.html')
		self.response.out.write(template.render(path, template_values))
		
	def count_hatebu_tag(self,q):
		count=0
		ago_30=datetime.today()-timedelta(days=30)
		tree = parse(urllib.urlopen('http://b.hatena.ne.jp/search/tag?q=' + q + '&mode=rss'))
		for i in tree.findall('./{http://purl.org/rss/1.0/}item'):
			if ago_30 <= datetime.strptime(i.find('{http://purl.org/dc/elements/1.1/}date').text.split("T")[0], "%Y-%m-%d"):
				count += int(i.find('{http://www.hatena.ne.jp/info/xmlns#}bookmarkcount').text)
		return count
	
	def get_hatebu_chart_url(self,qList):
		countList=[]
		allCount=0
		for q in qList:
			count = self.count_hatebu_tag(q.encode("utf-8"))
			allCount+=count
			countList.append(count)
		if allCount != 0:
			perList = [str((c*100 / allCount)) for c in countList]
		else:
			perList = ["0"]*len(qList)
		return "https://chart.googleapis.com/chart?cht=p3&chs=400x200&chd=t:"+",".join(perList)+"&chl="+"|".join(qList)
			
			
app = webapp2.WSGIApplication([
	('/vschart.html', VsChart)
	], debug=True)