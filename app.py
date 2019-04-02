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


# @app.route('/restaurant1')
# def restaurant1():
#     return render_template('restaurant1.html')

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

@app.route('/')
@app.route('/landing')
def landing():
    return render_template('landing.html')


@app.route('/restaurant1')
def restaurant1():
    return render_template('restaurant1.html')

@app.route('/customer/register', methods=['GET','POST'])
def register_customer():
    
    # if current_user.is_authenticated:
    #     return render_template('landing.html')
    # form = RegistrationForm()
    # if form.validate_on_submit():
    #     hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
    #     user = User(username=form.username.data, email=form.email.data, password=hashed_password)
    #     db.session.add(user)
    #     db.session.commit()
    #     flash('Your account has been created! You are now able to log in', 'success')
    #     return render_template('login')
    register_url = request.post("http://127.0.0.1:5000/customer/", json = { "username": username, "password": password, "firstname": firstname, "lastname": lastname, "contact_number": contact_number, "gender": gender},)
    print (register_url.text)
    register_json = register_url.text

    if request.method == "POST":
        print('sulod')
        username = request.form['username']
        password = request.form['password']
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        contact_number = request.form['contact_number']
        gender = request.form['gender']
        password = request.form['password']

        response = requests.post("http://127.0.0.1:5000/customer/",
        json={"username":username, "password":password}, )
        print(response.text)
        return redirect(url_for('official'))  
    return render_template('landing.html')


@app.route('/owner/register', methods=['GET','POST'])
def register_owner():
    
    register_url = request.post("http://127.0.0.1:5000/customer/", json = { "username": username, "password": password, "firstname": firstname, "lastname": lastname, "contact_number": contact_number, "gender": gender},)
    print (register_url.text)
    register_json = register_url.text

    if request.method == "POST":
        print('sulod')
        username = request.form['username']
        password = request.form['password']
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        contact_number = request.form['contact_number']
        gender = request.form['gender']
        password = request.form['password']

        response = requests.post("http://127.0.0.1:5000/customer/",
        json={"username":username, "password":password}, )
        print(response.text)
        return redirect(url_for('official'))  
    return render_template('landing.html')


    # register_json = register_url.json()
   
# @app.route('/customer/customer-profile')
# def customer():
    #  image_file = url_for('static', filename='profile_pic/' + current_user.image_file)
    # return render_template('customer-profile.html', register_json=register_json)

# @app.route('/login')
# def login():
#     return render_template('login.html')

# @app.route('/logout')
# def logout():
#     logout_user()
#     return render_template('login.html', form=form)

# @app.route('/customer-profile', methods=['GET', 'POST'])
# def customerprofile(username):
#     firstname = request.form['firstname']
#     lastname = request.form['lastname']
#     gender = request.form['gender']
#     email = request.form['email']
#     contact_number = request.form['contact_number']
#     username = request.form['username', False]
#     password = request.form['password', False]

#     return render_template('customer-profile.html')


# if __name__=='__main__':
#     app.run(debug=True,threaded=True, port=5000)   
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
        print(response.text)
        return redirect(url_for('official'))  
    return render_template('landing.html')
@app.route('/customerProfile')
def CustomerProfile():
    return render_template('customer-profile.html')


if __name__=='__main__':
    app.run(debug=True,threaded=True, port=4000)   

    
