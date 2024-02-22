const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser());

var corsConfiguration = {
  origin: 'http://localhost:3000',
  credentials: true
}

app.use(cors(corsConfiguration));

const secret = "KDUvJKcOzgnfNSkZTcZR38ZmLWEdlWfa";

const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'unicam2023',
    database: 'shop'
});

db.connect((err) => {
    if(err) {
      console.error("ERRORE DI CONNESIONE AL DATABASE: ", err);
    } else {
      console.log("CONNESSO AL DATABASE MYSQL");
    }
});

app.listen(5000, () => { 
  console.log(`Server is up and running on 5000 ...`); 
});


app.get("/getMysqlStatus", (req, res) => { 
  
  db.connect((err) => { 
    if(err) return res.status(500).send("MySQL Server is Down"); 
      
    res.send("MySQL Server is Active"); 
  }) 
});


app.get("/getUsers", (req, res) => { 

  db.query(
    "SELECT * FROM users",
    (err, results) => {
      if(err) console.log("Error");
      res.send(results); 
    }
  ) 
});


app.post("/login", async (req, res) => { 

  const email = req.body.email;
  const password = req.body.password;
  
  if(email === "" || password === "") {
    return res.status(403, "Error login").send();
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    (err, result) => {
      if(result.length <= 0) {
        return res.status(403, "Error login").send();
      }

      bcrypt.compare(password, result[0].password, (err, response) => {
          if(response) {

          const jwtToken = jwt.sign(email, secret);
                        
          if(!jwtToken) {
            res.clearCookie("token");
            res.status(403, "Error login").send();
          }

          res.cookie("token", jwtToken).send();
      } else {
          return res.status(403, "Error login").send();
      }
      });
    }
  )
});


app.post("/register", async (req, res) => { 

  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const password = req.body.password;

  const hash = await bcrypt.hash(password, saltRounds);
  
  if(name === "" || surname === "" || email === "" || password === "") {
    return res.status(403, "Error login").send();
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    (err, result) => {
      if(err || result.length > 0) {
        return res.status(403, "Email already registered").send();
      }
      
    }
  )

  db.query(
    "INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)",
    [name, surname, email, hash],
    (err, result) => {
      if(err) {
        return res.status(403, "Email already registered").send();
      }
      
      const jwtToken = jwt.sign(email, secret);
                        
      if(!jwtToken) {
        res.clearCookie("token");
        res.status(403, "Login errato").send();
        }

      res.cookie("token", jwtToken).send();
    }
  )
});

module.exports = db;