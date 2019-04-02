from flask import config
from flask_wtf import FlaskForm
from flask_login import current_user
from flask_bootstrap import Bootstrap
from wtforms import StringField, PasswordField, SubmitField,IntegerField, BooleanField, IntegerField, RadioField
from wtforms.validators import DataRequired, Length, Email, EqualTo, Optional, InputRequired, ValidationError



class RegistrationForm(FlaskForm):

    # username = StringField('Username',
    #                         validators=[DataRequired(), Length(min=2, max=20)])
    # email = StringField('Email',
    #                     validators=[DataRequired(), Email()])
    # password = PasswordField('Password', validators=[DataRequired()])
    # confirm_password = PasswordField('Confirm Password',
    #                                   validators=[DataRequired(), EqualTo('password')])
    # submit = SubmitField('Register Now')

# class RegistrationForm(FlaskForm):
#     username = StringField('Username',
#                            validators=[DataRequired(), Length(min=2, max=20)])
#     email = StringField('Email',
#                         validators=[DataRequired(), Email()])
#     password = PasswordField('Password', validators=[DataRequired()])
#     confirm_password = PasswordField('Confirm Password',
#                                      validators=[DataRequired(), EqualTo('password')])
#     submit = SubmitField('Sign Up')

#     def validate_username(self, username):
#         user = User.query.filter_by(username=username.data).first()
#         if user:
#             raise ValidationError('That username is taken. Please choose a different one.')

#     def validate_email(self, email):
#         user = User.query.filter_by(email=email.data).first()
#         if user:
#             raise ValidationError('That email is taken. Please choose a different one.')
    firstname = StringField('First Name', validators=[InputRequired(),Length(min=2,max=20)])
    lastname = StringField('Lasst Name', validators=[InputRequired(),Length(min=2,max=20)])
    gender = StringField('Gender', validators=[InputRequired(),Length(min=2,max=20)])
    contact = StringField('Contact Number', validators=[InputRequired(),Length(min=2,max=20)])
    email = StringField('Email Address', validators=[InputRequired(),Email()])
    username = StringField('User Name', validators=[InputRequired(),Length(min=2,max=20)])
    password = PasswordField('Password', validators=[InputRequired(), EqualTo('confirm_password', message='Passwords do not match,')])
    confirm_password = BooleanField('Confirm Password', validators=[InputRequired(),Length(min=2,max=20)])

class LogInForm(FlaskForm):
    email = StringField('Email',validators=[InputRequired(), Email()])
    password = PasswordField('Password', validators=[InputRequired()])
    emember = BooleanField('Remember')
