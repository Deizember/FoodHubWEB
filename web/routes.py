from web import Flask, render_template, request, url_for, redirect,flash, server, session
from flask_login import logout_user
import requests
from datetime import timedelta

#Routing for landing pages
@server.route('/')
def index():
    return render_template('landing.html')
@server.route('/burger')
def burger():
    return render_template('burger.html')
@server.route('/afritada')
def afritada():
    return render_template('afritada.html')
@server.route('/buttons')
def buttons():
    return render_template('buttons.html')
@server.route('/profile')
def profile():
    return render_template('profile.html')
    
@server.route('/customereservation')
def customereservation():
    return render_template('customereservation.html')


@server.route("/ownerlanding")
def ownerlanding():
    return render_template('ownerlanding.html')

@server.route("/customerlanding")
def customerlanding():
    return render_template('customerlanding.html')

# @server.before_request
# def make_session_permanent():
#     session.permanent = True
#     app.permanent_session_lifetime = timedelta(minutes=5)

#Routing for Logout
@server.route("/logout")
def logout():
    logout_user()
    return redirect(somewhere)


#Routing for Login
@server.route('/login', methods=['POST','GET'])
def login():
    print('wa kasulod')
    if request.method == "POST":
        
        print('sulod')
        username = request.form['username'] 
        password = request.form['password']
        owner_type = request.form['owner_type']
        # if check_user.status_code == 200:
        if owner_type == "owner":
            response = requests.post("foodhubapi.herokuapp.com/owner/login",json={"username":username, "password":password}, )
            print(response.status_code)
            print("owner")
            if response.status_code == 400:
                print("Username or password is incorrect")  
                
            else: 
                return redirect(url_for('ownerlanding'  ))
        elif owner_type == "Customer":
            response = requests.post("foodhubapi.herokuapp.com/customer/login",json={"username":username, "password":password}, )
            print(response.status_code)
            print("custom")
            if response.status_code == 400:
                print("Username or password is incorrect")
                
            else:
                return redirect(url_for('customerlanding'  ))
                print("user not found")

    return render_template('landing.html')

#Routing for Registration 

@server.route('/register', methods=['GET','POST'])
def Registration():
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
        user_type = request.form['owner_type']
        print(user_type)

        if user_type == "owner":
            response = requests.post("https://guarded-mesa-80703.herokuapp.com/owner/",json={"firstname":firstname, "lastname": lastname, "gender": gender,"contact_number": contact_number,"username":username,"email":email, "password":password} )
            print(response.status_code)
            if response.status_code == 400:
                print("Username or password is incorrect")
                
            else:
                return redirect(url_for('ownerlanding' ))
        else:
            response = requests.post("foodhubapi.herokuapp.com/customer/",json={"firstname":firstname, "lastname": lastname, "gender": gender,"contact_number": contact_number,"username":username,"email":email, "password":password} )
            print(response.status_code)
            if response.status_code == 400:
                print("Username or password is incorrect")
                
            else:
                return redirect(url_for('customerlanding' ))
            
    return render_template('landing.html')



#Routing for Restaurant profile

@server.route('/tables', methods=['GET'])
def tables():
    
    restaurantget = requests.get("foodhubapi.herokuapp.com/restaurant/1")
    restau=restaurantget.json()
    print(restau)
    return render_template('tables.html', displayres=restau)

@server.route('/tables/<string:name>', methods =['PUT'])
def addrestau():
    print('wa kasulod')
    if request.method == "POST":
        print('sulod')

        restaurant_name = request.form['restaurant_name'] 
        restaurant_type = request.form['restaurant_type']
        bio = request.form['bio']
        locations = request.form['locations']
        owner=1

        response = requests.post("foodhubapi.herokuapp.com/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations,"owner":owner}, )
        print(response.text)
        return redirect(url_for('tables'))  
    return render_template('ownerlanding.html')


@server.route("/tables<string:name>", methods =['DELETE'])
def deleterestau():
      
    return render_template('tables.html')

@server.route("/search", methods=['POST', 'GET'])
def search():
    url:'foodhubapi.herokuapp.com/restaurant'

#Routing for Customer Profile
@server.route('/customerProfile')
#@login_required
def customerProfile():
    
    return render_template('customer-profile.html')
