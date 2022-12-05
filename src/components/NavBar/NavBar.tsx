import "./NavBar.css"
import ShopLogo from "../ShopLogo/ShopLogo";

const NavBar = () => {

    const shopName = "S M I L E Z";

    return (
        <div className={"navbar-wrapper"}>
            <div className={"navbar-container"}>
                <div className={"navbar-left"}>
                    <ShopLogo name={shopName} />
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