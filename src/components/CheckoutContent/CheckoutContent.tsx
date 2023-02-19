import "./Checkout.css";
import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";
import {useContext, useEffect, useState} from "react";
import {useFetch} from "../../hooks/useFetch";
import {CustomerContext} from "../../context/CustomerContext";
import LinkButton from "../LinkButton/LinkButton";
import AccessChecker from "../AccessChecker/AccessChecker";
import {createOrder} from "../../utils/helpers/checkoutHelper";
import {useAlert} from 'react-alert'
import CheckoutForm from "./CheckoutForm";
import CheckoutButton from "./CheckoutButton";
import DiscountBar from "../DiscountBar/DiscountBar";
import CartSummaryDetails from "../CartSummaryDetails/CartSummaryDetails";
import CircularLoader from "../CircularLoader/CircularLoader";
import PaymentSelector from "./PaymentSelector";


const CheckoutContent = () => {

    const {customer}: any = useContext(CustomerContext);
    const [isLoading, setIsLoading] = useState(true);
    const {fetchedData: cart, isLoading: loading}: any = useFetch('http://localhost:8081/cart/' + customer.customerID);
    const alert = useAlert()


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(checkout);
        await createOrder(checkout, alert);
    }

    const [checkout, setCheckout] = useState({
        userID: customer.customerID.toString(),
        address: "test",
        city: "test",
        zip: "121212",
        country: "test",
        paymentMethod: "",
        shippingMethod: "hermes",
        firstName: "test",
        lastName: "test",
        email: "test@test.de",
        phone: "24244",
        orderTotal: cart?.total ?? 0,
        orderItems: cart?.items ?? [],
    });

    useEffect(() => {
        if (!loading) {
            setCheckout((prevCheckout) => ({
                ...prevCheckout,
                orderTotal: cart?.total ?? 0,
                orderItems: cart?.items ?? [],
            }));
        }
    }, [loading, cart]);

    const isCheckoutValid = () => {
        return Object.values(checkout).every((value) => value !== "");
    }


    return (
        <div className="checkout-wrapper">
            <AccessChecker isLoading={isLoading} setIsLoading={setIsLoading}
                           condition={(customer.isLoggedIn === "true")} nav={"/"}/>
            <div className={"checkout-page-headline"}>
                <GenericPageHeadline text={"CHECKOUT"}/>
            </div>
            <div className={"cart-button-row"}>
                <LinkButton URL={"/cart"} text={"Return to Cart"}></LinkButton>
            </div>
            <div className={"checkout-page-content"}>
                <div className={"checkout-page-content-left"}>
                    <CheckoutForm checkout={checkout} setCheckout={setCheckout} handleSubmit={handleSubmit}/>
                    <PaymentSelector setCheckout={setCheckout} checkout={checkout}/>
                </div>
                <div className={"checkout-page-content-right"}>
                    <h1 className={"cart-summary-headline"}>REVIEW YOUR ORDER</h1>
                    {isLoading
                        ? <CircularLoader/>
                        : <CartSummaryDetails cart={cart} discountBar={<DiscountBar/>}/>
                    }
                </div>
            </div>
            <CheckoutButton validator={isCheckoutValid}/>
        </div>
    );

}


export default CheckoutContent;