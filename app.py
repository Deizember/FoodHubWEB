from flask import Flask, render_template, request, url_for, redirect
from flask_bootstrap import Bootstrap
from forms import RegistrationForm, LogInForm
from flask_login import current_user
from flask_restful import Resource, Api
import requests

app = Flask(__name__)
Bootstrap (app)

# @app.route('/')
# def landing():
#     return render_template('landing.html')


@app.route('/restaurant1')
def restaurant1():
    return render_template('restaurant1.html')

# @app.route("/register", methods=['GET','POST'])
# def register(): 
#     return render_template('landing.html')
@app.route("/official")
def official():
    return render_template('official.html')

@app.route('/customer/register', methods=['GET','POST'])
def register_customer():
    if request.method == "POST":
        print('sulod')
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        contact_number = request.form['contact_number']
        gender = request.form['gender']
        username = request.form['username']
        password = request.form['password']
        

        response = requests.post("http://127.0.0.1:5000/customer",
        json={"firstname":firstname,"lastname":lastname,"contact_number":contact_number,"gender":gender,"username":username, "password":password}, )
        print(response.text)
        return redirect(url_for('official'))  
    return render_template('landing.html')


@app.route('/owner/register', methods=['GET','POST'])
def register_owner():
    if request.method == "POST":
        print('sulod')
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        contact_number = request.form['contact_number']
        gender = request.form['gender']
        username = request.form['username']
        password = request.form['password']
        
        response = requests.post("http://127.0.0.1:5000/customer",
        json={"firstname":firstname,"lastname":lastname,"contact_number":contact_number,"gender":gender,"username":username, "password":password}, )
        print(response.text)
        return redirect(url_for('official'))
        
    return render_template('landing.html')

 
@app.route('/', methods=['GET','POST'])
def Ownerlogin():
    print('wa kasulod')
    if request.method == "POST":
        print('sulod')
        username = request.form['username'] 
        password = request.form['password'] 

        response = requests.post("http://127.0.0.1:5000/owner/login",
        json={"username":username, "password":password}, )
        print(response.text)
        return redirect(url_for('official'))  
    return render_template('landing.html')
@app.route('/customerProfile')
def CustomerProfile():
    return render_template('customer-profile.html')


if __name__=='__main__':
    app.run(debug=True,threaded=True, port=4000)   

    
