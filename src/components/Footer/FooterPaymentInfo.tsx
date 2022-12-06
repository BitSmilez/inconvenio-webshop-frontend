import "./Footer.css"
import {Afterpay, Paypal, Klarna, Visa} from "react-pay-icons";

const FooterPaymentInfo = () => {

    return (
        <>
            <div className={"footer-payment-info"}>
                <h2 className={"footer-headlines"}>PAYMENT INFORMATION/</h2>
                <div className={"footer-payment-icons"}>
                    <Afterpay style={{margin: 5, width: 95, borderRadius: 15}}/>
                    <Paypal style={{margin: 5, width: 100, borderRadius: 15}}/>
                    <Klarna style={{margin: 5, width: 95, borderRadius: 15}}/>
                    <Visa style={{margin: 5, width: 100, borderRadius: 15}}/>
                </div>
            </div>
        </>
    )
}

export default FooterPaymentInfo;