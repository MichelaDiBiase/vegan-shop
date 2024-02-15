const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

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
      if(err) console.log("NON VA");
      res.send(results); 
    }
  ) 
});


app.post("/login", async (req, res) => { 

  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    (err, result) => {
      if(err) {
        console.log(err);
      }

      if(result.length > 0 || result == null) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if(response) {
            res.send(result);
          } else {
            return res.send({ message: "Wrong email/password combination!" });
          }
        });
      } else {
        return res.send({ message: "Email doesn't exist" });
      }
    }
  )
});


app.post("/register", async (req, res) => { 

  const email = req.body.email;
  const password = req.body.password;

  const hash = await bcrypt.hash(password, saltRounds);

  db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hash],
    (err, result) => {
      if(err) {
        return res.send("L'email è già presente");
      }
      res.json(result);
    }
  )
});

module.exports = db;