import "./CartContent.css"
import {ShoppingBag} from "@mui/icons-material";
import LinkButton from "../LinkButton/LinkButton";
import ProductList from "../ProductList/ProductList";
import {useContext, useState} from "react";
import CartSummaryDetails from "../CartSummaryDetails/CartSummaryDetails";
import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";
import {CustomerContext} from "../../context/CustomerContext";
import AccessChecker from "../AccessChecker/AccessChecker";

const CartContent = () => {

    const [cart, setCart] = useState<any>([]);
    const {customer}: any = useContext(CustomerContext);
    const [isLoading, setIsLoading] = useState(true);
    const cartIsEmpty = customer.cartItemCount === 0;


    return (
        <div className={"cart-wrapper"}>
            <AccessChecker isLoading={isLoading} setIsLoading={setIsLoading} condition={customer.isLoggedIn === "true"} nav={"/login"}/>
            <div className={"cart-page-headline"}>
                <GenericPageHeadline text={"YOUR CART"}/>
            </div>
            <div className={"cart-button-row"}>
                <LinkButton URL={"/"} text={"Continue Shopping"}></LinkButton>
                {!cartIsEmpty && <LinkButton URL={"/checkout"} text={"Checkout"}></LinkButton>}
            </div>
            <div className={"cart-content-wrapper"}>
                <ProductList url={"http://localhost:8081/cart/" + customer.customerID} label={""} callback={setCart}/>
                {!cartIsEmpty &&
                    <div className={"cart-details-container"}>
                        <div className={"cart-summary-headline-container"}>
                            <h1 className={"cart-summary-headline"}>YOUR ORDER IS READY</h1>
                            <ShoppingBag fontSize={"large"} sx={{mt: 1.75}}/>
                        </div>
                        <CartSummaryDetails discountBar={null} cart={cart}/>
                    </div>
                }
            </div>
        </div>
    )
}
export default CartContent;
