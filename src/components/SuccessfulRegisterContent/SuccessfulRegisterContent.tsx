import "./SuccessfulRegisterContent.css";
import LinkButton from "../LinkButton/LinkButton";

const SuccessfulRegisterContent = () => {
    return (
        <div className={"register-success-wrapper"}>
            <h1>Registration Successful! </h1>
            <p>Thank you for registering. You can now login.</p>
            <LinkButton URL={"/login"} text={"To Login"}/>
            <LinkButton URL={"/"} text={"Back to Home"}/>
        </div>

    )
}

export default SuccessfulRegisterContent;