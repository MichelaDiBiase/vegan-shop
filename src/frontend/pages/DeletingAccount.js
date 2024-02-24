import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DeletingAccount() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    function deleteAccount(e) {
        e.preventDefault();

        fetch("http://localhost:5000/deleteAccount", {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((response) => {
            if(response.status === 403) {
                setMessage("Non è stato possibile eliminare l'account")
            } else if(response.status === 200) {
                navigate("/");
            }
        });
    }

    return (
        <div onLoad={getData}>
            <nav>
                <Navbar />
            </nav>
            <h1 className="box-text">INSERISCI LA PASSWORD PER CONFERMARE ELIMINAZIONE</h1>
            <form className="form-account" id="form">
                <div className="border border-secondary">
                    <div className="form-floating" style={{ marginRight: "12%", marginLeft: "12%" }}>
                        <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" autoComplete="off" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
                <div className="account-buttons">
                    <Link to="/account">
                        <button className="btn btn-outline-dark"style={{ width: "17%", marginRight: "3%" }}>Annulla</button>
                    </Link>
                    <button onClick={deleteAccount} className="btn btn-dark"style={{ width: "17%", marginLeft: "3%" }}>Elimina account</button>
                </div>
            </form>
            <div className="error-message">
                <span>{ message }</span>
            </div>
        </div>
    );
}

export default DeletingAccount;