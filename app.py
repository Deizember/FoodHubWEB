import os
from PIL import Image
from flask import render_template, flash, redirect, request, Flask, url_for
from forms import RegistrationForm
from flask_login import login_user, current_user, logout_user, login_required
# from flask_login import login_required




app = Flask(__name__)

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
    firstname = request.form['firstname', False]
    lastname = request.form['lastname', False]
    gender = request.form['gender', False]
    email = request.form['email', False]
    contact_number = request.form['contact_number', False]
    username = request.form['username', False]
    password = request.form['password', False]
    
    register_url = request.post("https://fierce-scrubland-63107.herokuapp.com/customer/register?username", json = { "username": username, "password": password, "firstname": firstname, "lastname": lastname, "contact_number": contact_number, "gender": gender},)
    print (register_url.text)
    register_json = register_url.text

    # # register_json = register_url.json()  """
    return render_template('customer-profile.html', register_json=register_json)


@app.route('/owner/register', methods=['GET','POST'])
def register_owner():
    
    username = request.form['username']
    password = request.form['password']
    firstname = request.form['firstname']
    lastname = request.form['lastname']
    contact_number = request.form['contact_number']
    gender = request.form['gender']
    
    register_url = request.post("https://fierce-scrubland-63107.herokuapp.com/owner/register?username", json = { "username": username, "password": password, "firstname": firstname, "lastname": lastname, "contact_number": contact_number, "gender": gender},)
    print (register_url.text)
    register_json = register_url.text

    # register_json = register_url.json()
    return render_template('customer-profile.html', register_json=register_json)    

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


if __name__=='__main__':
    app.run(debug=True,threaded=True, port=5000)   