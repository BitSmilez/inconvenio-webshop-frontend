import {IconButton} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";
import "./CartProductItem.css";
const CartProductItem =({product}:{product:any}) => {


    let price = product.productSalesPrice ? product.productSalesPrice : product.productPrice;
    let name = product.productName
    let img = product.productImg
    let quantity = product.quantity
    let total = price * quantity
    console.log(product)
    return (
        <>


            <div className={"products-cart"}>
                <div className={"products-cart-container"}>
                    <div className={"products-cart-item"}>
                        <img className={"cart-prod-img"} src={img} alt="prodImg"></img>
                        <div className={"products-cart-item-details"}>
                            <h3> {name} </h3>
                            <div className={"cart-item-quantity"}>
                                <IconButton className={"cart-item-btn"} color="default" aria-label="Add to cart">
                                    <Add/>
                                </IconButton>
                                <p> {quantity}</p>
                                <IconButton className={"cart-item-btn"} color="default" aria-label="Add to cart">
                                    <Remove/>
                                </IconButton>
                            </div>
                            <p> Total:{total}€ </p>
                        </div>
                        <div className={"products-cart-item-actions"}>

                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default CartProductItem;