import React, {useState} from 'react';
import "./LoginForm.css";
import LinkButton from "../LinkButton/LinkButton";


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // TODO Login Functionality
    }

    return (
        <div className="login-form">
            <LinkButton URL={"/"} text={"Back to Shop"}/>
            <div className="form-container">
                <h1 className={"login-title"}>{"LOGIN TO INCONVENIO"}</h1>

                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-fields">
                        <label> E-Mail
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                placeholder="Enter your E-Mail..."/>
                        </label>
                    </div>
                    <div className="input-fields">
                        <label>Password
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                placeholder="Enter your Password..."/>
                        </label>
                    </div>
                    <button type={"submit"} className="login-button">LOGIN</button>
                    <p className={"register-link"}>Dont have an Account yet? <a href={"/register"}>Register here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;