import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function ModifyAccount() {

    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [surname, setSurname] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [email, setEmail] = useState("");
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
            setName(jsonData[0].name);
            setSurname(jsonData[0].surname);
            setEmail(jsonData[0].email);
            setNewName(jsonData[0].name);
            setNewSurname(jsonData[0].surname);
        });
    }

    function updateData(e) {
        e.preventDefault();

        if(name === newName && surname === newSurname) {
            setMessage("I dati sono rimasti inalterati.");
        } else {
            fetch("http://localhost:5000/updateUser", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000"
                },
                body: JSON.stringify({
                    name: newName,
                    surname: newSurname,
                    email: email
                })
            })
            .then((response) => {
                if(response.status === 403) {
                    setMessage("I dati non sono stati modificati");
                } else if(response.status === 200) {
                    navigate("/account");
                }
            });
        }
    }

    return (
        <div onLoad={getData}>
            <nav>
                <Navbar />
            </nav>
            <h1 className="box-text">MODIFICA DATI ACCOUNT</h1>
            <form className="form-account" id="form">
                <div className="border border-secondary">
                    <div className="account-email">
                        <h5 className="email-lable">Email</h5>
                        <span className="badge text-bg-dark" type="text" style={{ fontSize: "100%", textAlign: "left", width:"75%", marginRight: "3%", marginLeft: "3%" }}>{email}</span> 
                    </div>
                    <div className="account-name">
                        <h5 className="name-lable" htmlFor="name">Nome</h5>
                        <input type="text" style={{ width:"75%", marginRight: "3%", marginLeft: "3%" }} onChange={(e) => { setNewName(e.target.value) }} value={newName} />
                    </div>
                    <div className="account-surname">
                        <h5 className="surname-lable">Cognome</h5>
                        <input type="text" style={{ width:"75%", marginRight: "3%", marginLeft: "3%" }} onChange={(e) => { setNewSurname(e.target.value) }} value={newSurname} />
                    </div>
                </div>
                <div className="account-buttons">
                    <button onClick={updateData} className="btn btn-outline-dark"style={{ width: "17%" }}>Aggiorna dati</button>
                </div>
            </form>
            <div className="error-message">
                <span>{ message }</span>
            </div>
        </div>
    );
}

export default ModifyAccount;