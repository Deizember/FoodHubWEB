from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config[''] = 'testfile'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

<<<<<<< HEAD
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:5433/foodhub'


=======
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:/5432/FoodHub'

app.config['SECRET_KEY'] = 'any secret string'
>>>>>>> Login
app.static_folder = 'static'

db = SQLAlchemy(app)
db.create_all()
app.debug = True