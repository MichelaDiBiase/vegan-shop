import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Box from '../components/box';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Box
                text="ACCEDI O REGISTRATI AL SITO"
            />
            <div className="signInLink">
                <Link to="/SignIn">Registrati</Link>
            </div>
            </>
        );
    }
}

export default Login;