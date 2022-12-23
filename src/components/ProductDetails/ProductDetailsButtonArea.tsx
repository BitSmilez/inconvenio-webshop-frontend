import "./ProductDetails.css"
import {Button, IconButton} from "@mui/material";
import {AddShoppingCart, FavoriteBorder} from "@mui/icons-material";

const ProductDetailsButtonArea = () => {
    return(
        <div className={"product-details-button-area"}>
            <Button sx={{
                borderRadius: 10
            }} size="large" variant="outlined"> <AddShoppingCart/>ADD TO CART</Button>
            <IconButton size="large" color="primary" aria-label="add to shopping cart">
                <FavoriteBorder/>
            </IconButton>
        </div>
    )
}

export default ProductDetailsButtonArea;