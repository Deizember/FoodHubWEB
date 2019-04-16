from flask import Flask, render_template, request, url_for, redirect,flash
from flask_bootstrap import Bootstrap
import requests



app = Flask(__name__)


#Routing for landing pages
@app.route('/')
def index():
    return render_template('landing.html')
@app.route("/ownerlanding", methods=['GET','POST'])
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
    
        response = requests.post("http://127.0.0.1:5000/customer/",json={"firstname":firstname, "lastname": lastname, "gender": gender,"contact_number": str(contact_number),"username":username,"email":email, "password":password} )
        print(response.status_code)
        if response.status_code == 400:
            print("Username or password is incorrect")
            
        else:
            return redirect(url_for('customerlanding' ))
    return render_template('landing.html')



@app.route("/deleterestau", methods =['GET', 'POST', 'PULL'])
def deleterestau():
    if request.method == "POST":
        owner = 1
        response = requests.put("http://127.0.0.1:5000/restaurant/",
        json={"restaurant_name":restaurant_name, "restaurant_type":restaurant_type, "bio":bio, "locations":locations, "owner":1}, )
        restau_json=restaurant.json()
        return redirect(url_for('restaurantprofile'))

    return render_template('reservationrestau.html', resto=restau_json)

if __name__=='__main__':
    app.run(debug=True,threaded=True, port=9080)   

    
