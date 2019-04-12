import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LogInForm


app = Flask(__name__)

app.config[''] = 'testfile'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

<<<<<<< HEAD
<<<<<<< HEAD
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:5433/foodhub'


=======
=======
>>>>>>> origin/registration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:/5432/FoodHub'

app.config['SECRET_KEY'] = 'any secret string'
>>>>>>> Login
app.static_folder = 'static'

db = SQLAlchemy(app)
db.create_all()
app.debug = True

# any secret string