import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
//import Box from '../components/box';

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:5000/register", {
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

    function redirect(e) {
        e.preventDefault();
        handleSubmit(e);
        navigate("/");
    }

    return (
        <body>
            <Navbar />
            <h1 className="box-text">REGISTRAZIONE AL SITO</h1>
            <form className="Box" id="form" onSubmit={redirect} >
                <div className="email-form">
                    <label for="exampleFormControlInput1" className="box-label">Indirizzo Email</label>
                    <input type="email" id="email" onChange={(e) => { setEmail(e.target.value)}} className="box-control" placeholder="nome@esempio.com" />
                </div>
                <div className="password-form">
                    <label for="inputPassword5" className="box-label">Password</label>
                    <input type="password" id="password" onChange={(e) => { setPassword(e.target.value)}} className="box-control" aria-describedby="passwordHelpBlock" />
                </div>
                <div id="pass" type={"password"} className="pass-text">
                   La tua password deve essere lunga 8-20 caratteri, contenente lettere e numeri, ma non spazi, caratteri speciali, o emoji.
                </div>
                <div className="login-buttons">
                    <button type="submit" className="btn btn-dark" style={{ width: '15%' }}>Registrati</button>
                </div>
            </form>
        </body>
        
        );
}

export default SignUp;