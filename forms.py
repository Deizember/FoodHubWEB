from flask_wtf import FlaskForm
from flask_login import current_user
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, PasswordField, SubmitField,IntegerField, BooleanField, IntegerField, RadioField
from wtforms.validators import DataRequired, Length, Email, EqualTo, Optional, InputRequired, ValidationError

import config

class RegisterForm(FlaskForm):
    username = StringField("username", validators=[DataRequired(), Length(min=2, max=50)])
    firstname = StringField("firstname", validators=[DataRequired(), Length(min=2, max=50)])
    lastname = StringField("lastname", validators=[DataRequired(), Length(min=2, max=50)])
    email = StringField("email", validators=[DataRequired(), Email()])
    password = PasswordField("password", validators=[DataRequired(), Length(min=6, max=50)])
    
    submit = SubmitField('Register')