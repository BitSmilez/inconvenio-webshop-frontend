import "./CustomerMenu.css";
import {FavoriteBorder, ShoppingCartOutlined} from "@mui/icons-material";
import {Badge, IconButton, Tooltip} from "@mui/material";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CustomerContext} from "../../context/CustomerContext";
import AccountMenu from "../AccountMenu/AccountMenu";

const CustomerMenu = () => {
    const {customer}: any = useContext(CustomerContext);

    return(
        <div className={"customer-menu-wrapper"}>
            <Tooltip title="Wishlist">
            <IconButton className={"fav-icon-btn"} component={Link} to="/wishlist" color="default" aria-label="Wishlist">
                <Badge className={"favBadge"} badgeContent={customer.wishlistItemCount} color={"primary"}>
                    <FavoriteBorder/>
                </Badge>
            </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
            <IconButton className={"cart-icon-btn"} component={Link} to="/cart" color="default" aria-label="Cart">
                <Badge className={"cartBadge"} badgeContent={customer.cartItemCount} color={"primary"}>
                    <ShoppingCartOutlined/>
                </Badge>
            </IconButton>
            </Tooltip>
            <AccountMenu customer={customer}/>
        </div>
    )
}

export default CustomerMenu;