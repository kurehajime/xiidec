#!/usr/bin/env python
# -*- coding: utf-8 -*-
import webapp2
import os
import random
from google.appengine.ext.webapp import template
from google.appengine.api import memcache

class Abface(webapp2.RequestHandler):
	def get(self):
		self.draw()
		
	def post(self):
		if not self.request.get('choice') is None and self.request.get('choice')!="":
			memcache.set("face",[int(i) for i in  self.request.get('choice').split(",")], 3600)
			memcache.set("sel",self.request.get('sel'), 3600)
		self.draw()
		
	def draw(self):
		face1 = self.makeface()
		face2=[i for i in face1]
		r=random.randint(0,3)
		face2[r] = int(random.choice("12345".replace(str(face2[r]), "")))
		if memcache.get("sel")=="B":
			face1,face2=face2,face1
		template_values={
			'brow1':'brow_' + str(face1[0]) + '.jpg',
			'eye1':'eye_' + str(face1[1]) + '.jpg',
			'nose1':'nose_' + str(face1[2]) + '.jpg',
			'mouth1':'mouth_' + str(face1[3]) + '.jpg',
			'brow2':'brow_' + str(face2[0]) + '.jpg',
			'eye2':'eye_' + str(face2[1]) + '.jpg',
			'nose2':'nose_' + str(face2[2]) + '.jpg',
			'mouth2':'mouth_' + str(face2[3]) + '.jpg',
			'face1':",".join(map(str,face1)),
			'face2':",".join(map(str,face2)),
		}
		path = os.path.join(os.path.dirname(__file__), 'html/abface.html')
		self.response.out.write(template.render(path, template_values))
		
	def makeface(self):
		face = memcache.get("face")
		if face is None:
			face = [random.randint(1,5) for i in range(4)]
			memcache.set("face", face, 3600)
		return face
		
app = webapp2.WSGIApplication([
	('/abface.html', Abface)
], debug=True)