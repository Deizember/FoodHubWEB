from flask import Flask, render_template, request, url_for, redirect,flash
from flask_bootstrap import Bootstrap
from flask_login import current_user
import requests



#Routing for landing pages
@app.route('/')
def index():
    return render_template('landing.html')


@app.route("/ownerlanding")
def ownerlanding():
    return render_template('ownerlanding.html')

@app.route("/customerlanding")
def customerlanding():
    return render_template('customerlanding.html')

#Routing for Registration 
@app.route('/register', methods=['GET','POST'])
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
            response = requests.post("http://127.0.0.1:9080/owner/",json={"firstname":firstname, "lastname": lastname, "gender": gender,"contact_number": contact_number,"username":username,"email":email, "password":password} )
            print(response.status_code)
            if response.status_code == 400:
                print("Username or password is incorrect")
                
            else:
                return redirect(url_for('ownerlanding' ))
        else:
            response = requests.post("http://127.0.0.1:9080/customer/",json={"firstname":firstname, "lastname": lastname, "gender": gender,"contact_number": contact_number,"username":username,"email":email, "password":password} )
            print(response.status_code)
            if response.status_code == 400:
                print("Username or password is incorrect")
                
            else:
                return redirect(url_for('customerlanding' ))
            
    return render_template('landing.html')

#Routing for Login
@app.route('/login', methods=['GET','POST'])
def login():
    print('wa kasulod')
    
    if request.method == "POST":
        
        print('sulod')
        username = request.form['username'] 
        password = request.form['password']
        check_user = requests.get("http://127.0.0.1:9080/owner"+"/"+ username)
        print(check_user.status_code)
        if check_user.status_code == 200:
            response = requests.post("http://127.0.0.1:9080/owner/login",json={"username":username, "password":password}, )
            print(response.status_code)
            if response.status_code == 400:
                print("Username or password is incorrect")  
                
            elif response.status_code == 200:
                return redirect(url_for('ownerlanding'  ))
        elif check_user.status_code == 404:
            response = requests.post("http://127.0.0.1:9080/customer/login",json={"username":username, "password":password}, )
            print(response.status_code)
            if response.status_code == 400:
                print("Username or password is incorrect")
                
            elif response.status_code == 200:
                return redirect(url_for('customerlanding'  ))
            else:
                print("user not found")



    return render_template('landing.html')

#Routing for Restaurant profile

@app.route('/restaurantprofile', methods=['GET'])
def restaurantprofile():
    owner = 1
    restaurant = requests.get("http://127.0.0.1:9080/restaurant/")
    restau_json=restaurant.json()
    print(restau_json)
    return render_template('restaurantprofile.html', i=restau_json)

@app.route('/restaurant', methods =['GET', 'POST'])
def addrestau():
    print('wa kasulod')
    if request.method == "POST":
        print('sulod')

        restaurant_name = request.form['restaurant_name'] 
        restaurant_type = request.form['restaurant_type']
        bio = request.form['bio']
        locations = request.form['locations']
        owner = 1


        response = requests.post("http://127.0.0.1:9080/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":owner}, )
        print(response.text)
        return redirect(url_for('restaurantprofile'))  
    return render_template('reservationrestau.html')

@app.route("/displayrestau", methods =['GET', 'POST'])
def displayrestau():
    owner = 1
    restaurant = requests.get("http://127.0.0.1:9080/restaurant/")
    restau_json=restaurant.json()
    
    return render_template('ownerlanding.html', i=restau_json)

@app.route("/deleterestau", methods =['GET', 'POST', 'PULL'])
def deleterestau():
    if request.method == "POST":
        owner = 1
        response = requests.put("http://127.0.0.1:9080/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":1}, )
        restau_json=restaurant.json()
        return redirect(url_for('restaurantprofile'))

    return render_template('reservationrestau.html', resto=restau_json)

#Routing for Customer Profile
@app.route('/customerProfile', methods =['GET', 'POST'])
#@login_required
def CustomerProfile():
    image_file = url_for('static', filename='images/'+ current_user.image_file)
    return render_template('customer-profile.html')

@app.route("/displaycustom", methods =['GET', 'POST'])
def displaycustom():
    customer = 1
    restaurant = requests.get("http://127.0.0.1:9080/customer/")
    restau_json=restaurant.json()
    
    return render_template('customerlanding.html', i=custom_json)


if _name__=='__main_':
    app.run(debug=True,threaded=True, port=9080)