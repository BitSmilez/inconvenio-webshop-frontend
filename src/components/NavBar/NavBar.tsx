import "./NavBar.css"
import ShopLogo from "../ShopLogo/ShopLogo";
import shopConstants from "../../data/shopConstants";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {



    return (
        <div className={"navbar-wrapper"}>
            <div className={"navbar-container"}>
                <div className={"navbar-left"}>
                    <ShopLogo name={shopConstants.shopName} />
                </div>
                <div className={"navbar-center"}>
                    <SearchBar/>

                </div>
                <div className={"navbar-right"}>

                </div>
            </div>
        </div>
    )
}

export default NavBar;