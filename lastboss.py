#!/usr/bin/env python
# -*- coding: utf-8 -*-
import webapp2
import os
from google.appengine.ext.webapp import template
from google.appengine.ext import db
from google.appengine.api import memcache

class BOSS(db.Model):
	hp=db.IntegerProperty()
	date=db.DateProperty()
	
class LastBoss(webapp2.RequestHandler):
	max_hp＝4800
	
	def get(self):
		pass
	
class LastBossMessage(webapp2.RequestHandler):
	def get(self):
		hp=self.getHP()
		template_values = {
			'hp': hp,
			'messages':messages
			}
			
	def getHP(self):
		hp=memcache.get("hp")
		if hp is None:
			q=BOSS.all()
			q.addFilter("date", Query.FilterOperator.EQUAL, today());
			results=q.fetch(1)
			if results is None:
				row=BOSS()
				row.hp= max_hp
				row.date= today()
				row.put()
				hp=max_hp
			else
				hp=results.hp
			memcache.set("hp", hp, 1800)
		return hp
		
	def setHP(self,hp):
		q=BOSS.all()
		q.addFilter("date", Query.FilterOperator.EQUAL, today());
		results=q.fetch(1)
		if results is None:
			results=BOSS()
			results.date=today()
		results.hp=hp
		result.put()
		return hp
		
	def attack(self):
		hp=self.getHP()
		hp-=1
		setHP(hp)
		return hp
		
app = webapp2.WSGIApplication([
	('/lastboss.html', LastBoss)
	,('/lastboss_message.html', LastBossMessage)
], debug=True)