from flask import Flask, render_template, request, url_for, redirect,flash
from flask_bootstrap import Bootstrap
from flask_login import current_user
from flask_restful import Resource, Api
import requests



app = Flask(__name__)
Bootstrap (app)


#Routing for landing pages

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

#Routing for Login
@app.route('/')
def index():
    return render_template('landing.html')

@app.route('/login', methods=['GET','POST'])
def Ownerlogin():
    print('wa kasulod')
   
    if request.method == "POST":
        
        print('sulod')
        username = request.form['username'] 
        password = request.form['password']
        #user_get = requests.get("http://127.0.0.1:5000/users/" + username)
        #User = user.verify_auth_token(username_or_token)

        #if User.id == "owner":
        #    if request.form['username'] == 'admin' and request.form['password'] == 'password':
        #         return redirect(url_for('ownerlanding'  ))
                
        # elif user.id == "costumer":
        response = requests.post("http://127.0.0.1:5000/owner/login",json={"username":username, "password":password}, )
        print(response.status_code)
        if response.status_code == 400:
            print("Username or password is incorrect")
            
        elif response.status_code == 200:
            return redirect(url_for('ownerlanding'  ))
    return render_template('landing.html')


#Routing for Restaurant profile

@app.route('/restaurantprofile')
def restaurantprofile():
    return render_template('restaurantprofile.html')

@app.route('/restaurant', methods =['GET', 'POST'])
def addrestau():
    print('wa kasulod')
    if request.method == "POST":
        print('sulod')

        restaurant_name = request.form['restaurant_name'] 
        restaurant_type = request.form['restaurant_type']
        bio = request.form['bio']
        locations = request.form['locations']
        owner = request.form['owner']
        

        response = requests.post("http://127.0.0.1:5000/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":owner}, )
        print(response.text)

        return redirect(url_for('restaurantprofile'))  
    return render_template('reservationrestau.html')

@app.route("/displayrestau", methods =['GET', 'POST'])
def displayrestau():
    if request.method == "POST":
        owner = 1
        response = request.post("http://127.0.0.1:5000/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":1}, )
        restau_json=restaurant.json()
        return redirect(url_for('restuarantprofile'))

    return render_template('reservationrestau.html', resto=restau_json)

@app.route("/deleterestau", methods =['GET', 'POST', 'PULL'])
def deleterestau():
    if request.method == "POST":
        owner = 1
        response = request.post("http://127.0.0.1:5000/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":1}, )
        restau_json=restaurant.json()
        return redirect(url_for('restuarantprofile'))

    return render_template('reservationrestau.html', resto=restau_json)

if __name__=='__main__':
    app.run(debug=True,threaded=True, port=4000)   
