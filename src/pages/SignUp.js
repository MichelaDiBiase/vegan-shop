import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] = useState("");
    
    let navigate = useNavigate();

    function sendRegistration(e) {
        e.preventDefault();

        if(password.length >= 8) {
            fetch("http://localhost:5000/register", {
            method: "POST",
            credentials:"include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                password: password,
                }),
            })
            .then((response) => {
                if(response.status === 403) {
                    setMessage("That email is alredy in use");
                } else if(response.status === 200) {
                    navigate("/");
                }
            });
        } else {
            setMessage("La password deve contenere almeno 8 caratteri");
        }

    }

    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <h1 className="box-text">REGISTRAZIONE AL SITO</h1>
                <form className="form-signup" id="form" onSubmit={sendRegistration}>
                    <div className="border border-secondary">
                        <div className="form-floating">
                            <input type="name" id="floatingName" onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder="Nome" autoComplete="off" />
                            <label htmlFor="floatingInput">Nome</label>
                        </div>
                        <div className="form-floating">
                            <input type="surname" id="floatingSurname" onChange={(e) => { setSurname(e.target.value) }} className="form-control" placeholder="Cognome" autoComplete="off" />
                            <label htmlFor="floatingInput">Cognome</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" id="floatingInput" onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="nome@esempio.com" autoComplete="off" />
                            <label htmlFor="floatingInput">Indirizzo Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" id="floatingPassword" onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="Password" autoComplete="off" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                    <div className="signup-button">
                        <button type="submit" className="btn btn-dark" style={{ width: "20%" }}>Registrati</button>
                    </div>
                </form>
            <div className="error-message">
                <label>{ message }</label>
            </div>
        </div>
        
        );
}

export default SignUp;