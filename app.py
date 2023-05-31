from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
import sqlite3
from datetime import datetime
from dateutil import relativedelta
from markupsafe import Markup


app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOADED"] = True

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

connect = sqlite3.connect('database.db')
connect.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, username TEXT, babyname TEXT, birthday DATE, password TEXT) ')

today = datetime.now()

@app.route('/home', methods = ["GET", "POST"])
def login(): 
    if request.method == "GET":
        return render_template("home.html")

    elif request.method == "POST":
        session.clear()

        username = request.form['usernameL']
        password = request.form['passwordL']
    with sqlite3.connect('database.db') as users:
            cursor = users.cursor()
            rows = cursor.execute("SELECT * FROM users WHERE username = ?", [username]).fetchone()
            users.commit()
            if rows == None:
                return render_template("result.html", msg="Username doesn't exists")   
            elif rows[5] != password:
                return render_template("result.html", msg="Wrong password")

            else: 
                babyname = rows[3]
                birthday=rows[4]
                birthdaydate = datetime.strptime(birthday, '%Y-%m-%d')
                days = (today - birthdaydate).days
                weeks = int(days/7)
                delta = relativedelta.relativedelta(today, birthdaydate)
                months = delta.months + (delta.years * 12)
                years = delta.years

                session['user_id'] = rows[0]
                return render_template("home.html", babyname=babyname, weeks=weeks, months=months, years=years)
    
@app.route('/', methods = ["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    elif request.method == "POST":
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        birthday = request.form['birthday']
        babyname = request.form['babyname']

        with sqlite3.connect('database.db') as users:
            cursor = users.cursor()
            cursor.execute("INSERT INTO users (email,username,babyname,birthday,password) VALUES (?,?,?,?,?)", (email, username, babyname, birthday,password))
            
            users.commit()
            return render_template("error.html", msg = "You are registred! Go back and log in to start saving your baby BabySteps:) ")

@app.route("/logout", methods=["GET"])
def logout():
    session.clear()

    return redirect("/")

@app.route("/records", methods=["GET"])
def records():
    return render_template("records.html")

@app.route("/tooth", methods =["POST"])
def tooth():
    return render_template('result.html', msg = 'Success, new teeth has been saved!')

@app.route("/sleep", methods=["POST"])
def sleep():
    return render_template('result.html', msg='Success, nap has beed saved!')

@app.route("/meals", methods=["POST"])
def meals(): 
    return render_template("result.html", msg="Success, meal has beed saved!")

@app.route("/meds", methods=["POST"])
def meds():
    return render_template("result.html", msg="Success, medication dose has been saved")