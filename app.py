from flask import Flask, render_template, request




app = Flask(__name__)

@app.route('/landing')
def landing():
    return render_template('landing.html')
@app.route('/restaurant1')
def restaurant1():
    return render_template('restaurant1.html')
@app.route("/register", methods=['GET','POST'])
def register():
    return render_template('register.html')
@app.route('/api/users', methods = ['POST'])
def new_user():
    username = request.json.get('username')
    password = request.json.get('password')
    if username is None or password is None:
        abort(400) # missing arguments
    if Customer.query.filter_by(username = username).first() is not None:
        abort(400) # existing user
    user = Customer(username = username)

    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({ 'username': user.username }), 201, {'Location': url_for('get_user', id = user.id, _external = True)}
@app.route("/login", methods=['GET','POST'])
def login():
    return render_template('login.html')

if __name__=='__main__':
    app.run(debug=True)
