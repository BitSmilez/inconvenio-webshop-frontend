import "./ShopLogo.css"
import {Link} from "react-router-dom";

const ShopLogo = ({name}: { name: string }) => {

    return (
        <Link to={"/"}>
            <h1 className={"shop-logo"}>{name}</h1>
        </Link>
    );
}

export default ShopLogo;