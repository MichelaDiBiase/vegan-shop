import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function ModifyPassword() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message,setMessage] = useState("");

    let navigate = useNavigate();

    function getData(e) {
        e.preventDefault();

        fetch("http://localhost:5000/getUser", {
            method: "GET",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
        .then(res => res.json())
        .then(jsonData => {
            setEmail(jsonData[0].email);
        });
    }

    function updateData(e) {
        e.preventDefault();

        if(password === newPassword && newPassword.length >= 8) {
            fetch("http://localhost:5000/updatePassword", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000"
                },
                body: JSON.stringify({
                    email: email,
                    password: newPassword
                }),
            })
            .then((response) => {
                if(response.status === 200) {
                    navigate("/account");
                }
            });
        } else {
            setMessage("La password non è stata riscritta correttamente o non contiene almeno 8 caratteri");
        }
    }

    return (
        <div onLoad={getData}>
            <nav>
                <Navbar />
            </nav>
            <h1 className="box-text">CAMBIO PASSWORD</h1>
            <form className="form-account" id="form">
                <div className="border border-secondary">
                    <div className="account-email">
                        <h5 className="email-lable">Email</h5>
                        <span className="badge text-bg-dark" type="text" style={{ fontSize: "100%", textAlign: "left", width:"75%", marginRight: "3%", marginLeft: "3%" }}>{email}</span> 
                    </div>
                    <div className="form-floating" style={{ marginRight: "12%", marginLeft: "12%" }}>
                        <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" autoComplete="off" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating" style={{ marginRight: "12%", marginLeft: "12%" }}>
                        <input type="password" className="form-control" onChange={(e) => { setNewPassword(e.target.value) }} placeholder="Password" autoComplete="off" />
                        <label htmlFor="floatingPassword">Ripeti password</label>
                    </div>
                </div>
                <div className="account-buttons">
                    <button onClick={updateData} className="btn btn-outline-dark"style={{ width: "17%" }}>Aggiorna password</button>
                </div>
            </form>
            <div className="error-message">
                <span>{ message }</span>
            </div>
        </div>
    );
}

export default ModifyPassword;