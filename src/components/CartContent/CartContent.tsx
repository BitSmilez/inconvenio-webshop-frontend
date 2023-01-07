import "./CartContent.css"
import {ShoppingBag} from "@mui/icons-material";
import LinkButton from "../LinkButton/LinkButton";
import ProductList from "../ProductList/ProductList";
import {useState} from "react";
import CartSummaryDetails from "../CartSummaryDetails/CartSummaryDetails";
import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";

const CartContent = () => {

    const [cart, setCart] = useState<any>([]);

    return (
        <div className={"cart-wrapper"}>
            <div className={"cart-page-headline"}>
                <GenericPageHeadline text={"YOUR CART"}/>
            </div>
            <div className={"cart-button-row"}>
                <LinkButton URL={"/"} text={"Continue Shopping"}></LinkButton>
                <LinkButton URL={"/checkout"} text={"Checkout"}></LinkButton>
            </div>
            <div className={"cart-content-wrapper"}>
                <ProductList url={"http://localhost:8081/cart/1234"} label={""} callback={setCart}/>
                <div className={"cart-details-container"}>
                    <div className={"cart-summary-headline-container"}>
                        <h1 className={"cart-summary-headline"}>YOUR ORDER IS READY</h1>
                        <ShoppingBag fontSize={"large"} sx={{mt: 1.75}}/>
                    </div>
                    <CartSummaryDetails cart={cart}/>
                </div>
            </div>
        </div>
    )
}
export default CartContent;
