from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config[''] = 'testfile'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:/5433/foodhub'

app.static_folder = 'static'

db = SQLAlchemy(app)
db.create_all()
app.debug = True
