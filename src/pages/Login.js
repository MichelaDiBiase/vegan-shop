import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Login() {
        
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] = useState("");

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            }),
        })
        .then((response) => {
            if(response.status === 403) {
                setMessage("L'email o la password è sbagliata");
            } else if(response.status === 200) {
                navigate("/");
            }
        });
        
    }

    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <h1 className="box-text">ACCESSO AL SITO</h1>
                <form className="form-login" id="form" onSubmit={handleSubmit} >
                    <div className="border border-secondary">
                        <div className="form-floating">
                            <input type="email" id="floatingInput" onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="nome@esempio.com" />
                            <label htmlFor="floatingInput">Indirizzo Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" id="floatingPassword" onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="Password" autoComplete="off" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                    <div className="login-buttons">
                        <Link to="/signUp" style={{ marginRight: "2%" }}>
                            <button className="btn btn-outline-dark" style={{ width: "17%" }}>Registrati</button>
                        </Link>
                        <button type="submit" className="btn btn-dark" style={{ width: "17%", marginLeft: "2%" }}>Accedi</button>
                    </div>
                </form>
            <div className="error-message">
                <label>{ message }</label>
            </div>
        </div>
    );
}

export default Login;