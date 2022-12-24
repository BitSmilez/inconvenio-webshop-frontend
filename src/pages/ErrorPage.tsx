import LinkButton from "../components/LinkButton/LinkButton";
import "./Pages.css";

const ErrorPage = () => {
    return (
        <div className={"error-page-wrapper"}>
            <h1 className={"error-page-title"}>404 - Something went wrong. Please dont try to break something :/</h1>
            <LinkButton URL={"/"} text={"TAKE ME BACK"}/>
        </div>
    );
}

export default ErrorPage;