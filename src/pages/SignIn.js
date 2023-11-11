import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Box from '../components/box';

class SignIn extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Box
                text="TI STAI REGISTRANDO"
            />
            </>
        );
    }
}

export default SignIn;