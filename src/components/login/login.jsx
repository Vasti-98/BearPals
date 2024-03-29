import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className = "base-container">
            <div className= "header">Login</div>
            <div className = "content">
                <div className = "image">
                    <img src={loginImg} />
                </div>
                <div className = "form">
                    <div className="form-group">
                        <label htmlForm = "username">Username!</label>
                        <input type = "text" name="username" placeholder = "username"/>
                    </div>
                    <div className="form-group">
                        <label htmlForm = "password">Password</label>
                        <input type = "password" name="password" placeholder = "password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="button">Login</button>
            </div>
        </div>
    }
}