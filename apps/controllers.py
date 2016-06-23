# -*- coding: utf-8 -*-
from flask import render_template
from apps import app

@app.route('/')
@app.route('/index')
def index():
	
	# original file 
    return render_template("index.html")