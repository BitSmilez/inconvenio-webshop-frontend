import "./Checkout.css";
import PaymentIcon from "../PaymentIcon/PaymentIcon";
import {useState} from "react";

const PaymentSelector = ({setCheckout, checkout}: {setCheckout: any, checkout: any}) => {

    const [selectedPayment, setSelectedPayment] = useState("");

    const handlePaymentChange = (value: string) => {
        setCheckout({...checkout, paymentMethod: value});
    }

    return(
        <div className={"checkout-selector"}>
            <p>Select Payment Method</p>
            <div className={"checkout-payment-icons"}>
                <PaymentIcon
                    paymentMethod="afterpay"
                    selectedPayment={selectedPayment}
                    onClick={() => {
                        handlePaymentChange("afterpay");
                        setSelectedPayment("afterpay");
                    }}
                />
                <PaymentIcon
                    paymentMethod="paypal"
                    selectedPayment={selectedPayment}
                    onClick={() => {
                        handlePaymentChange("paypal");
                        setSelectedPayment("paypal");
                    }}
                />
                <PaymentIcon
                    paymentMethod="klarna"
                    selectedPayment={selectedPayment}
                    onClick={() => {
                        handlePaymentChange("klarna");
                        setSelectedPayment("klarna");
                    }}
                />
                <PaymentIcon
                    paymentMethod="visa"
                    selectedPayment={selectedPayment}
                    onClick={() => {
                        handlePaymentChange("visa");
                        setSelectedPayment("visa");
                    }}
                />
            </div>
        </div>
    )
}

export default PaymentSelector;