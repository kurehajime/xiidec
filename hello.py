#!/usr/bin/env python
# -*- coding: utf-8 -*-
import webapp2
import os
from google.appengine.ext.webapp import template
from google.appengine.ext import db
from google.appengine.api import memcache

class Hello(webapp2.RequestHandler):
	def get(self):
		template_values={
		'mes':'こんにゃく'
		}
		path = os.path.join(os.path.dirname(__file__), 'html/hello.html')
		self.response.out.write(template.render(path, template_values))
		
		
app = webapp2.WSGIApplication([
	('/hello.html', Hello)
], debug=True)