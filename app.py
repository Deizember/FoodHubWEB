from flask import Flask, render_template, request, url_for, redirect,flash
from flask_bootstrap import Bootstrap
from forms import RegistrationForm, LogInForm
from flask_login import current_user
from flask_restful import Resource, Api
import requests



app = Flask(__name__)
Bootstrap (app)


@app.route('/restaurant1')
def restaurant1():
    return render_template('restaurant1.html')


@app.route("/official")
def official():
    return render_template('official.html')

@app.route('/', methods=['GET','POST'])
def Ownerlogin():
    print('wa kasulod')
   
    if request.method == "POST":
        
        print('sulod')
        username = request.form['username'] 
        password = request.form['password'] 

        response = requests.post("http://127.0.0.1:5000/owner/login",
        json={"username":username, "password":password}, )
        print(response.status_code)
        if response.status_code == 400:
            print("Username or password is incorrect")
            
        elif response.status_code == 200:
            return redirect(url_for('official'  ))
    return render_template('landing.html')


if __name__=='__main__':
    app.run(debug=True,threaded=True, port=4000)   

    