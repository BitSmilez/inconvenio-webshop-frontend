import "./ProductDetails.css"
import {IconButton} from "@mui/material";
import {Add, DiscountOutlined, Remove} from "@mui/icons-material";

const ProductDetailsPriceArea = ({price, salesPrice}: { price: number, salesPrice: number }) => {
    return (
        <div className={"price-area"}>
            {salesPrice &&
                <>
                    <p className="product-item-sales-price">{"$" + salesPrice.toFixed(2)}</p>
                    <DiscountOutlined color={"success"}/>
                </>
            }
            <p className={salesPrice != null
                ? "product-item-price-if-on-sale"
                : "product-item-price-normal"}>
                {"$" + price?.toFixed(2)}</p>
            <span className={"product-details-price-info"}>Incl. VAT</span>
            <div className={"product-item-quantity"}>
                <p>QTY: </p>
                <IconButton className={"cart-item-btn"} color="default" aria-label="Add to cart">
                    <Add/>
                </IconButton>
                <p> 1 </p>
                <IconButton className={"cart-item-btn"} color="default" aria-label="Add to cart">
                    <Remove/>
                </IconButton>
            </div>
        </div>
    )
}
export default ProductDetailsPriceArea;