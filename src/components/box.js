import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <>
            <h1 className="loginText">{this.props.text}</h1>
            <div className="emailBox">
                <label for="exampleFormControlInput1" class="form-label">Indirizzo Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@esempio.com" />
            </div>
            <div className="passwordBox">
                <label for="inputPassword5" class="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                <div id="pass" type={"password"} class="form-text">
                    La tua password deve essere lunga 8-20 caratteri, contenente lettere e numeri, ma non spazi, caratteri speciali, o emoji.
                </div>
            </div>
            </>
        );
    }
}

export default Box;