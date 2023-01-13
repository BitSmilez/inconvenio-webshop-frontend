import {IconButton} from "@mui/material";
import {Add, HighlightOff, Remove} from "@mui/icons-material";
import "./CartProductItem.css";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {CustomerContext} from "../../context/CustomerContext";
import {useAlert} from 'react-alert'


const CartProductItem = ({product}: { product: any }) => {

    const navigate = useNavigate();
    const alert = useAlert()

    let price = product.productSalesPrice ? product.productSalesPrice : product.productPrice;
    let quantity = product.quantity
    let total = price * quantity

    const {customer}: any = useContext(CustomerContext);

    const handleGoBackToDetails = () => {
        navigate({
            pathname: "/products",
            search: "?product=" + product.productID,
        });
    }

    const handleRemoveFromCart = async (e: any) => {
        e.stopPropagation();
        fetch("http://localhost:8080/remove-from-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productID: product.productID,
                cartID: customer.customerID,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    window.location.reload();
                } else {
                    alert.show("Something went wrong :/")
                }
            });
    }


    return (
        <>
            <div onClick={handleGoBackToDetails} className={"cart-product-info"}>
                <div className={"cart-product-container"}>
                    <div className={"cart-product-details"}>
                        <IconButton onClick={(e) => handleRemoveFromCart(e)}
                                    sx={{position: "absolute"}}
                                    className={"pList-add-to-cart-icon"} color="default"
                                    aria-label="Add to cart">
                            <HighlightOff/>
                        </IconButton>
                        <img src={product.productImg} alt={product.productName}/>
                        <div className={"cart-product-general"}>
                            <h2>{product.productName}</h2>
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