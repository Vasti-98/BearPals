import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className = "base-container">
            <div className= "header">Register</div>
            <div className = "content">
                <div className = "image">
                    <img src={loginImg} />
                </div>
                <div className = "form">
                    <div className="form-group">
                        <label htmlForm = "username">Username</label>
                        <input type = "text" name="username" placeholder = "username"/>
                    </div>
                    <div className="form-group">
                        <label htmlForm = "password">Password</label>
                        <input type = "password" name="password" placeholder = "password"/>
                    </div>
                    <div className="form-group">
                        <label htmlForm = "email">Email</label>
                        <input type = "email" name="email" placeholder = "email"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="button">Register</button>
            </div>
        </div>
    }
}