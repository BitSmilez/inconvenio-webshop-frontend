import "./LinkButton.css"
const LinkButton = ({URL}: {URL: string}) => {
    return(
        <li className={"link-button-li-elem"}><a className={"link-button-link"} href={URL}>Back to Shop</a></li>
    )
}

export default LinkButton;