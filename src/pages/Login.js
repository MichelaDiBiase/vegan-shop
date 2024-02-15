import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
//TO-DO import Box from '../components/box';



function Login() {
        
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            }),
        })

        localStorage.setItem("isLogedIn", true);
    }

    return (
        <body>
            <Navbar />
            <h1 className="box-text">ACCESSO AL SITO</h1>
            <form className="Box" id="form" onSubmit={handleSubmit} >
                <div className="email-form">
                    <label htmlFor="exampleFormControlInput1" className="box-label">Indirizzo Email</label>
                    <input type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} className="box-control" placeholder="nome@esempio.com" />
                </div>
                <div className="password-form">
                    <label htmlFor="inputPassword5" className="box-label">Password</label>
                    <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} className="box-control" aria-describedby="passwordHelpBlock" />
                </div>
                <div id="pass" type={"password"} className="pass-text">
                    La tua password deve essere lunga 8-20 caratteri, contenente lettere e numeri, ma non spazi, caratteri speciali, o emoji.
                </div>
                <div className="login-buttons">
                    <Link className="signup-button" to="/SignUp">
                        <button type="submit" className="btn btn-outline-dark" style={{ width: '13%', marginRight: "2%" }}>Registrati</button>
                    </Link>
                    <Link className="signup-button" to="/">
                        <button type="submit" className="btn btn-dark" style={{ width: '13%', marginLeft: "2%" }}>Accedi</button>
                    </Link>
                </div>
            </form>
        </body>
    );
}

export default Login;