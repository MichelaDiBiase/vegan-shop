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


app.get("/getUser", (req, res) => {

  const authHeader = req.headers["cookie"];
  const token = authHeader && authHeader.split('=')[1];
  
  if (!token) {
    return res.status(403, "Error with token").send();
      
  }
  
  jwt.verify(token, secret, (err, email) => {
    if (err) {
      return res.sendStatus(403, "Error with token").send();
    }
    
    db.query(
      "SELECT * FROM users where email = ?",
      email,
      (err, result) => {
        if(err) {
          return res.status(403, "Error").send();
        };

        return res.json(result);
      }
    )

  })

  
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


app.post("/updateUser", async (req, res) => { 

  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;

  const authHeader = req.headers["cookie"];
  const token = authHeader && authHeader.split('=')[1];
  
  if(name === "" || surname === "" || email === "") {
    return res.status(403, "Error login").send();
  }

  jwt.verify(token, secret, (err, email) => {
    if (err) {
      return res.sendStatus(403, "Error with token").send();
    }
        
    db.query(
      "UPDATE users SET name = ?, surname = ? WHERE email= ?",
      [name, surname, email],
      (err, result) => {
        if(err) {
          return res.status(403, "Error").send();
        }
        
        return res.json(result);
      }
    )
  });
});


app.post("/updatePassword", async (req, res) => { 

  const password = req.body.password;
  const email = req.body.email;
  const hash = await bcrypt.hash(password, saltRounds);

  const authHeader = req.headers["cookie"];
  const token = authHeader && authHeader.split('=')[1];
  
  if(password === "" || email === "") {
    return res.status(403, "Error login").send();
  }

  jwt.verify(token, secret, (err, email) => {
    if (err) {
      return res.sendStatus(403, "Error with token").send();
    }
        
    db.query(
      "UPDATE users SET password = ? WHERE email= ?",
      [hash, email],
      (err, result) => {
        if(err) {
          return res.status(403, "Error").send();
        }
        
        return res.json(result);
      }
    )
  });
});

app.delete("/deleteAccount", async (req, res) => {

  const email = req.body.email; 
  const password = req.body.password;

  const authHeader = req.headers["cookie"];
  const token = authHeader && authHeader.split('=')[1];
  
  if(password === "" || email === "") {
    return res.status(403, "Error").send();
  }

  jwt.verify(token, secret, (err, tokenEmail) => {
    if (err) {
      return res.sendStatus(403, "Error with token").send();
    }

    if(tokenEmail === email) {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        email,
        (err, result) => {
          if(result.length <= 0) {
            return res.status(403, "Error").send();
          }
            
          bcrypt.compare(password, result[0].password, (err, response) => {
            if(response) {

              db.query(
                "DELETE FROM users WHERE email = ?",
                [email],
                (err, result) => {
                  if(err) {
                    return res.status(403, "Error").send();
                  }
    
                  return res.clearCookie("token").send();
                }
              )
            } else {
              return res.status(403, "Error").send();
            }
          });
        }
      )
    } else {
      return res.status(403, "Error").send();
    }
  });
});


app.get("/logout", async (req, res) => {
  res.clearCookie("token").send();
});

module.exports = db;