from flask import Flask, render_template, request, url_for, redirect,flash, session
import requests

server = Flask(__name__)

from web.routes import *    