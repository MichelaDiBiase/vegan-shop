import React from 'react';

    

function Box()  {

    return (
        <body>
            <form className="Box" id="form">
                <h1 className="box-text">{this.props.text}</h1>
                <div className="email-form">
                    <label for="exampleFormControlInput1" className="box-label">Indirizzo Email</label>
                    <input type="email" id="email" className="box-control" placeholder="nome@esempio.com" />
                </div>
                <div className="password-form">
                    <label for="inputPassword5" className="box-label">Password</label>
                    <input type="password" id="password" className="box-control" aria-describedby="passwordHelpBlock" />
                    <div id="pass" type={"password"} className="pass-text">
                        La tua password deve essere lunga 8-20 caratteri, contenente lettere e numeri, ma non spazi, caratteri speciali, o emoji.
                    </div>
                </div>
            </form>
        </body>
    );
}

export default Box;