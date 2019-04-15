from flask import Flask, render_template, request, url_for, redirect, flash
from flask_bootstrap import Bootstrap
from forms import RegistrationForm, LogInForm
from flask_login import current_user, login_required
from flask_restful import Resource, Api
import requests

app = Flask(__name__)
Bootstrap (app)

# @app.route('/')
# def landing():
#     return render_template('landing.html')


@app.route('/')
def index():
    return render_template('landing.html')
@app.route("/ownerlanding", methods=['GET','POST'])
def ownerlanding():
    return render_template('ownerlanding.html')

@app.route("/customerlanding")
def customerlanding():
    return render_template('customerlanding.html')

@app.route('/register', methods=['GET','POST'])
def OwnerRegistration():
    print('hhhhhhhhhhh')
   
    if request.method == "POST":
        print('sulod')
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        gender = request.form['gender']
        contact_number = request.form['contact_number']
        email = request.form['email']
        username = request.form['username'] 
        password = request.form['password']
    
        response = requests.post("http://127.0.0.1:5000/customer/",json={"firstname":firstname, "lastname": lastname, "gender": gender,"contact_number": str(contact_number),"username":username,"email":email, "password":password} )
        print(response.status_code)
        if response.status_code == 400:
            print("Username or password is incorrect")
            
        else:
            return redirect(url_for('customerlanding' ))
    return render_template('landing.html')



@app.route('/customerProfile')
@login_required
def CustomerProfile():
    image_file = url_for('static', filename='images/'+ current_user.image_file)
    return render_template('customer-profile.html')


if __name__=='__main__':
    app.run(debug=True,threaded=True, port=4000)   

    
