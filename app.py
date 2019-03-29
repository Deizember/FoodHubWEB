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
    return render_template('register.html', form=form)

@app.route('/RestaurantReservation',methods=['GET','POST'])
def RestaurantReservation():
    return render_template('register-reservation.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/customerProfile')
def CustomerProfile():
    return render_template('customer-profile.html')


if __name__=='__main__':
    app.run(debug=True,threaded=True, port=5000)   