from flask import Flask, render_template, request, url_for, redirect,flash

server = Flask(__name__)

from routes import *