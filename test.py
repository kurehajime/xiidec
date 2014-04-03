#!/usr/bin/env python
# -*- coding: utf-8 -*-
import webapp2
import os
from google.appengine.ext.webapp import template
from google.appengine.ext import db
from google.appengine.api import memcache

class BBSDB(db.Model):
	name = db.StringProperty()
	massage=db.StringProperty(multiline=True)
	date=db.DateTimeProperty(auto_now_add=True)
	
class Test(webapp2.RequestHandler):
	def get(self):
		results=memcache.get("messages")
		if results is None:
			results=self.getMessages()
		template_values = {
			'massages': results
			}
		path = os.path.join(os.path.dirname(__file__), 'html/test.html')
		self.response.out.write(template.render(path, template_values))
		
	def post(self):
		row=BBSDB()
		row.name= self.request.get('name')
		row.massage= self.request.get('massage')
		row.put()
		self.getMessages()
		self.response.out.write("name:"+self.request.get('name')+"<br>massage:"+self.request.get('massage'))
		
	def getMessages(self):
		q=BBSDB.all()
		q.order("-date")
		results=q.fetch(5)
		memcache.set("messages", results, 1800)
		return results
		
app = webapp2.WSGIApplication([
	('/test.html', Test)
], debug=True)