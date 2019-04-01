from flask import Flask, render_template, request
# from flask_login import login_required




app = Flask(__name__)

@app.route('/landing')
def landing():
    return render_template('landing.html')


@app.route('/restaurant1')
def restaurant1():
    return render_template('restaurant1.html')

@app.route("/customer/register", methods=['GET','POST'])
def register():
    
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

    # register_json = register_url.json()
    return render_template('customer-profile.html', register_json=register_json)


@app.route("/owner/register", methods=['GET','POST'])
def regist():
    
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