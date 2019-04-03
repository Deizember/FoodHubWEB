from flask import Flask, render_template, request, url_for, redirect,flash
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
@app.route('/restaurantprofile')
def restaurantprofile():
    return render_template('restaurantprofile.html')

@app.route('/reservationres', methods =['GET', 'POST'])
def reservationres():
    if request.method == "POST":
        print('sulod')
        restaurant_name = request.form['restaurant_name'] 
        restaurant_type = request.form['restaurant_type']
        bio = request.form['bio']
        locations = request.form['locations']


        response = request.post("http://127.0.0.1:5000/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":1}, )
        print(response.text)
        flash('Restaurant successfully created!')
        return redirect(url_for('restuarantprofile'))  
    return render_template('reservationrestau.html')

@app.route("/displayrestau", methods =['GET', 'POST'])
def displayrestau():
    owner = 1
    response = request.post("http://127.0.0.1:5000/restaurant/",
    json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":1}, )
    restau_json=restaurant.json()

    return render_template('reservationrestau.html', resto=restau_json)

# @app.route("/register", methods=['GET','POST'])
# def register(): 
#     return render_template('landing.html')
@app.route("/official")
def official():
    return render_template('official.html')


# @app.route('/customer/login', methods=['GET','POST'])
# def Customerlogin():
#     if request.method == "POST":
#         username = request.form['username'] 
#         password = request.form['password'] 

#         response = request.post("http://127.0.0.1:5000/owner/login",
#         json = {"username":username, "password":password})
#         print(response.text)
       
    # return render_template('official.html')

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
@app.route('/customerProfile')
def CustomerProfile():
    return render_template('customer-profile.html')


if __name__=='__main__':
    app.run(debug=True,threaded=True, port=4000)   

    