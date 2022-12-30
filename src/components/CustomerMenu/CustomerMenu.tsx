import {FavoriteBorder, ShoppingCartOutlined} from "@mui/icons-material";
import {Badge, IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CustomerContext} from "../../context/CustomerContext";

const CustomerMenu = () => {

    const {customerData}: any = useContext(CustomerContext);

    return(
        <>
            <IconButton className={"fav-icon-btn"} component={Link} to="/wishlist" color="default" aria-label="Wishlist">
                <Badge className={"favBadge"} badgeContent={customerData.wishlistItemCount} color={"primary"}>
                    <FavoriteBorder/>
                </Badge>
            </IconButton>
            <IconButton className={"cart-icon-btn"} component={Link} to="/cart" color="default" aria-label="Cart">
                <Badge className={"cartBadge"} badgeContent={customerData.cartItemCount} color={"primary"}>
                    <ShoppingCartOutlined/>
                </Badge>
            </IconButton>
        </>
    )
}

export default CustomerMenu;