import "./NavBar.css"
import ShopLogo from "../ShopLogo/ShopLogo";
import shopConstants from "../../data/shopConstants";

const NavBar = () => {



    return (
        <div className={"navbar-wrapper"}>
            <div className={"navbar-container"}>
                <div className={"navbar-left"}>
                    <ShopLogo name={shopConstants.shopName} />
                </div>
                <div className={"navbar-center"}>

                </div>
                <div className={"navbar-right"}>

                </div>
            </div>
        </div>
    )
}

export default NavBar;