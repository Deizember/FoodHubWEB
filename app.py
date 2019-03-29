from flask import Flask, render_template, request, flash, url_for, redirect




app = Flask(__name__)

@app.route('/landing')
def landing():
    return render_template('landing.html')
@app.route('/restaurant1')
def restaurant1():
    return render_template('restaurant1.html')

@app.route("/register", methods=['GET','POST'])
def register():
    firstname = request.form['firstname']
    print firstname
    lastname = request.form['lastname']
    gender = request.form['gender']
    email = request.form['email']
    contact_number = request.form['contact_number']
    username = request.form['username']
    password = request.form['password']
    
    register_url = request.post("https://fierce-scrubland-63107.herokuapp.com/owner/register?username"+ username+"&password="+ password+ "&firstname="+firstname+"&lastname="+ lastname+"&contact_number="+contact_number+"&gender="+gender)
    register_json = register_url.json()
    return render_template('landing.html', register_json=register_json, form=form)

@app.route("/login", methods=['GET','POST'])
def login():

    return render_template('login.html')

if __name__=='__main__':
    app.run(debug=True)
