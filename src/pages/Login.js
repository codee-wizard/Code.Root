import React from "react";
import "../styles/Login.css"

import user_icon from '../components/Assets/person.png'
import email_icon from '../components/Assets/email.png'
import password_icon from '../components/Assets/password.png'

const loginSignup =() =>{
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text"/>
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email"/>
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password"/>
                </div>
            </div>
            <div className="forgot-pass">Forgot Password?<span>Click Here!</span></div>
            <div className="submit-cnt">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}

export default loginSignup;