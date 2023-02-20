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

    const {customer, getCustomerInfo}: any = useContext(CustomerContext);
    const customerDetails = getCustomerInfo();
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
        address: "",
        city: "",
        zip: "",
        country: "",
        paymentMethod: "",
        shippingMethod: "hermes",
        firstName: customerDetails.firstname,
        lastName: customerDetails.lastname,
        email: customerDetails.email,
        phone: "",
        orderTotal: cart?.total ?? 0,
        orderItems: cart?.items?.reduce((map: any, item: any) => {
            map[item.productID] = item.quantity;
            return map;
        }, {}) ?? {},
    });

    useEffect(() => {
        if (!loading) {
            setCheckout((prevCheckout) => ({
                ...prevCheckout,
                orderTotal: cart?.total ?? 0,
                orderItems: cart?.items?.reduce((map: any, item: any) => {
                    map[item.productID] = item.quantity;
                    return map;
                }, {}) ?? {},
            }));
        }
    }, [loading, cart]);


    return (
        <div className="checkout-wrapper">
            <AccessChecker isLoading={isLoading} setIsLoading={setIsLoading}
                           condition={(cart?.total > 0)} nav={"/"}/>
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
            <CheckoutButton checkout={checkout}/>
        </div>
    );

}

export default CheckoutContent;