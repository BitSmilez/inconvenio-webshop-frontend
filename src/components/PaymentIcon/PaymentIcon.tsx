import {Afterpay, Klarna, Paypal, Visa} from "react-pay-icons";

const PaymentIcon = ({ paymentMethod, selectedPayment, onClick }: {paymentMethod: string, selectedPayment: string, onClick: any}) => {
    return (
        <div
            onClick={onClick}
            style={{
                borderRadius: 15,
                margin: 10,
                cursor: "pointer",
                backgroundColor: selectedPayment === paymentMethod ? "#252525" : "white",
                border: selectedPayment === paymentMethod ? "1px solid #252525" : "none"
            }}
        >
            {paymentMethod === "afterpay" && <Afterpay style={{width: 100, borderRadius: 15, cursor: "pointer"}}/>}
            {paymentMethod === "paypal" && <Paypal style={{width: 100, borderRadius: 15, cursor: "pointer"}} />}
            {paymentMethod === "klarna" && <Klarna style={{width: 100, borderRadius: 15, cursor: "pointer"}}/>}
            {paymentMethod === "visa" && <Visa style={{width: 100, borderRadius: 15, cursor: "pointer"}} />}
        </div>
    );
};

export default PaymentIcon;