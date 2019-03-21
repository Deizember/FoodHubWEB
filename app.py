from flask import Flask, render_template, request




app = Flask(__name__)

@app.route('/landing')
def landing():
    return render_template('landing.html')
@app.route('/restaurantfound')
def restaurantfound():
    return render_template('restaurant-found.html')
@app.route('/restaurant1')
def restaurant1():
    return render_template('restaurant1.html')
@app.route('/homepage1')
def homepage1():
    return render_template('homepage1.html')
@app.route('/homepage2')
def homepage2():
    return render_template('homepage2.html')
@app.route("/register", methods=['GET','POST'])
def register():
    return render_template('register.html', form=form)

@app.route('/RestaurantReservation',methods=['GET','POST'])
def RestaurantReservation():
    return render_template('register-reservation.html')

if __name__=='__main__':
    app.run(debug=True)   