import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Account() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

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
            });
    }

    function logout(e) {
        e.preventDefault();

        fetch("http://localhost:5000/logout", {
            method: "GET",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
        .then((response) => {
            if(response.status === 200) {
                navigate("/");
            }
        });
    }

    return (
        <div onLoad={getData}>
            <nav>
                <Navbar />
            </nav>
            <h1 className="box-text">DATI ACCOUNT</h1>
            <form className="form-account" id="form">
                <div className="border border-secondary">
                    <div className="account-email">
                        <h5 className="email-lable">Email</h5>
                        <span className="badge text-bg-dark" type="text" style={{ fontSize: "100%", textAlign: "left", width:"75%", marginRight: "3%", marginLeft: "3%" }}>{email}</span> 
                    </div>
                    <div className="account-name">
                        <h5 className="name-lable" htmlFor="name">Nome</h5>
                        <span className="badge text-bg-dark" type="text" style={{ fontSize: "100%", textAlign: "left", width:"75%", marginRight: "3%", marginLeft: "3%" }}>{name}</span>
                    </div>
                    <div className="account-surname">
                        <h5 className="surname-lable">Cognome</h5>
                        <span className="badge text-bg-dark" type="text" style={{ fontSize: "100%", textAlign: "left", width:"75%", marginRight: "3%", marginLeft: "3%" }}>{surname}</span>
                    </div>
                </div>
                <div className="account-delete">
                    <Link to="/deleteAccount">
                        <span className="deleting-lable">Elimina account</span>
                    </Link>
                </div>
                <div className="account-buttons">
                    <Link to="/updatePassword">
                        <button className="btn btn-outline-dark"style={{ width: "17%", marginRight: "3%" }}>Aggiorna password</button>
                    </Link>
                    <Link to="/updateAccount">
                        <button className="btn btn-outline-dark"style={{ width: "17%" }}>Aggiorna dati</button>
                    </Link>
                    <button onClick={logout} className="btn btn-dark" style={{ width: "17%", marginLeft: "3%" }}>Log out</button>
                </div>
            </form>
        </div>
    );
}

export default Account;