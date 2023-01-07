import {IconButton} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";
import "./CartProductItem.css";

const CartProductItem = ({product}: { product: any }) => {

    let price = product.productSalesPrice ? product.productSalesPrice : product.productPrice;
    let name = product.productName
    let img = product.productImg
    let quantity = product.quantity
    let total = price * quantity

    return (
        <>
            <div className={"cart-product-info"}>
                <div className={"cart-product-container"}>
                    <div className={"cart-product-details"}>
                        <img src={img} alt={name}/>
                        <div className={"cart-product-general"}>
                            <h2>{name}</h2>
                            <p>Item: ${price.toFixed(2)}</p>
                        </div>
                        <div className={"cart-product-price-info"}>
                            <div className={"cart-product-quantity-selector"}>
                                <p className={"cart-product-quantity-label"}>Quantity</p>
                                <div className={"cart-product-amount"}>
                                    <IconButton color="default" aria-label="Add to cart">
                                        <Add/>
                                    </IconButton>
                                    <p> {quantity}</p>
                                    <IconButton color="default" aria-label="Add to cart">
                                        <Remove/>
                                    </IconButton>
                                </div>
                            </div>
                            <div className={"cart-product-total"}>
                                <p> Total: ${total.toFixed(2)} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartProductItem;