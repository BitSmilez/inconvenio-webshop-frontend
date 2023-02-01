import "./RegisterForm.css";
import {useContext, useState} from 'react';
import LinkButton from "../LinkButton/LinkButton";
import {useAlert} from "react-alert";
import {register} from "../../utils/helpers/authHelper"
import {CustomerContext} from "../../context/CustomerContext";

function RegisterForm() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const alert = useAlert()
    const {setLoggedIn}: any = useContext(CustomerContext);

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const body = {
            username: email,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname
        };
        await register(body, alert, setLoggedIn)
    };



    return (
        <div className="register-form">
            <LinkButton URL={"/"} text={"Back to Shop"}/>
            <div className="register-form-container">
                <h1 className={"register-title"}>{"REGISTER NEW ACCOUNT"}</h1>

                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-fields">
                        <label> Firstname
                            <input
                                type="text"
                                required
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                name="firstname"
                                placeholder="Enter Firstname..."/>
                        </label>
                    </div>
                    <div className="input-fields">
                        <label>Lastname
                            <input
                                type="text"
                                required
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                name="lastname"
                                placeholder="Enter Lastname..."/>
                        </label>
                    </div>
                    <div className="input-fields">
                        <label>E-Mail
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                placeholder="Enter E-Mail..."/>
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
                                placeholder="Enter Password..."/>
                        </label>
                    </div>
                    <button type={"submit"} className="register-button">REGISTER NEW ACCOUNT</button>
                    <p className={"register-link"}>Already a Member? <a href={"/login"}>Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
