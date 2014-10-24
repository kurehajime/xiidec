#!/usr/bin/env python
import webapp2
import os
from google.appengine.ext.webapp import template
import md5

class MainHandler(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'html/index.html')
		self.response.out.write(template.render(path, template_values))

class Webconv(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'html/webconv.html')
		self.response.out.write(template.render(path, template_values))

class Scouter(webapp2.RequestHandler):
	def get(self):
		point = int(md5.new(self.request.get('url')).hexdigest(),16) % 1000000
		template_values = {
			'url': self.request.get('url'),
			'point': point,
			}
		path = os.path.join(os.path.dirname(__file__), 'html/scouter.html')
		self.response.out.write(template.render(path, template_values))

class Snownoise(webapp2.RequestHandler):
	def get(self):
		template_values = {
		'url': self.request.get('url'),
		}
		path = os.path.join(os.path.dirname(__file__), 'html/snownoise.html')
		self.response.out.write(template.render(path, template_values))

class Oekaki(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'html/oekaki.html')
		self.response.out.write(template.render(path, template_values))
		
class Gear(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'html/gear.html')
		self.response.out.write(template.render(path, template_values))
		
class Pzl(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'html/pzl.html')
		self.response.out.write(template.render(path, template_values))
		
class Vdopzl(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'html/vdopzl.html')
		self.response.out.write(template.render(path, template_values))
		
class Morse(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'html/morse.html')
		self.response.out.write(template.render(path, template_values))
class Warmup(webapp2.RequestHandler):
	def get(self):
		self.error(404)
		return self.response.out.write('404 not found')

app = webapp2.WSGIApplication([
('/', MainHandler),('/scouter', Scouter),('/snownoise',Snownoise),('/webconv',Webconv),('/oekaki.html',Oekaki),('/gear.html',Gear),('/pzl.html',Pzl),('/vdopzl.html',Vdopzl),('/morse.html',Morse),('/_ah/warmup',Warmup)
], debug=True)
