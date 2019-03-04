from flask import Flask, render_template, request




app = Flask(__name__)

@app.route('/landing')
def landing():
    return render_template('landing.html')

@app.route("/register", methods=['GET','POST'])
def register():
    return render_template('register.html', form=form)

@app.route('/RestaurantReservation',methods=['GET','POST'])
def RestaurantReservation():
    return render_template('register-reservation.html')

if __name__=='__main__':
    app.run(debug=True)