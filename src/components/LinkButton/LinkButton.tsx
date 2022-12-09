import "./LinkButton.css"
const LinkButton = ({URL, text}: {URL: string, text: string}) => {
    return(
        <li className={"link-button-li-elem"}><a className={"link-button-link"} href={URL}>{text}</a></li>
    )
}

export default LinkButton;