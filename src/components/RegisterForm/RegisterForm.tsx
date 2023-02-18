import "./RegisterForm.css";
import {useState} from 'react';
import LinkButton from "../LinkButton/LinkButton";
import {useAlert} from "react-alert";
import {register} from "../../utils/helpers/authHelper"

function RegisterForm() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [registerForm, setRegisterForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleChange = (event: any) => {
        setRegisterForm({...registerForm, [event.target.name]: event.target.value});
    }


    const alert = useAlert();

    const handleSubmit = async (event:any) => {
        setIsSubmitting(true);
        event.preventDefault();
        const body = {
            username: registerForm.email,
            password: registerForm.password,
            email: registerForm.email,
            firstname: registerForm.firstname,
            lastname: registerForm.lastname
        };
        await register(body, alert, setIsSubmitting);
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
                                value={registerForm.firstname}
                                onChange={(e) => handleChange(e)}
                                name="firstname"
                                placeholder="Enter Firstname..."/>
                        </label>
                    </div>
                    <div className="input-fields">
                        <label>Lastname
                            <input
                                type="text"
                                required
                                value={registerForm.lastname}
                                onChange={(e) => handleChange(e)}
                                name="lastname"
                                placeholder="Enter Lastname..."/>
                        </label>
                    </div>
                    <div className="input-fields">
                        <label>E-Mail
                            <input
                                type="email"
                                required
                                value={registerForm.email}
                                onChange={(e) => handleChange(e)}
                                name="email"
                                placeholder="Enter E-Mail..."/>
                        </label>
                    </div>
                    <div className="input-fields">
                        <label>Password
                            <input
                                type="password"
                                required
                                value={registerForm.password}
                                onChange={(e) => handleChange(e)}
                                name="password"
                                placeholder="Enter Password..."/>
                        </label>
                    </div>
                    <button type={"submit"} className="register-button">{`${isSubmitting ? "REGISTERING..." : "REGISTER NEW ACCOUNT"}`}</button>
                    <p className={"register-link"}>Already a Member? <a href={"/login"}>Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
