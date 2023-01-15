import "./ProductDetails.css"
import {IconButton} from "@mui/material";
import {Add, DiscountOutlined, Remove} from "@mui/icons-material";

const ProductDetailsPriceArea = ({price, salesPrice, quantity, changeQuantity}: {
    price: number,
    salesPrice: number,
    quantity: number,
    changeQuantity: any,
}) => {

    const classNameForPriceTag = salesPrice ? "product-item-price-if-on-sale" : "product-item-price-normal";

    return (
        <div className={"price-area"}>
            {salesPrice &&
                <>
                    <p className="product-item-sales-price">{"$" + salesPrice.toFixed(2)}</p>
                    <DiscountOutlined color={"success"}/>
                </>
            }
            <p className={classNameForPriceTag}>{"$" + price?.toFixed(2)}</p>
            <span className={"product-details-price-info"}>Incl. VAT</span>
            <div className={"product-item-quantity"}>
                <p>QTY: </p>
                <IconButton onClick={() => changeQuantity(quantity + 1)}
                            className={"cart-item-btn"}
                            color="default"
                            aria-label="Add to cart">
                    <Add/>
                </IconButton>
                <p> {quantity} </p>
                <IconButton onClick={() => changeQuantity(quantity - 1)}
                            className={"cart-item-btn"}
                            color="default"
                            aria-label="Add to cart">
                    <Remove/>
                </IconButton>
            </div>
        </div>
    )
}
export default ProductDetailsPriceArea;