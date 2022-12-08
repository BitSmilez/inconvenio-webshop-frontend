import "./Footer.css"
import FooterLinks from "./FooterLinks";
import FooterShopInfos from "./FooterShopInfos";
import FooterPaymentInfo from "./FooterPaymentInfo";
import FooterShippingInfos from "./FooterShippingInfos";

const Footer = () => {

    const shopData = {
        shopName: "INCONVENIO",
        address: "1234 Street-Name, City",
        email: "Mail@Address.here",
        phone: "+(123) 456-7890"
    }

    return (
        <div className={"footer-container"}>
            <div className={"footer-area-left"}>
                <FooterShopInfos shopName={shopData.shopName}
                                 address={shopData.address}
                                 email={shopData.email}
                                 phone={shopData.phone}/>
            </div>
            <div className={"footer-area-center-left"}>
                <FooterLinks/>
            </div>
            <div className={"footer-area-center-right"}>
                <FooterPaymentInfo/>
            </div>
            <div className={"footer-area-right"}>
                <FooterShippingInfos/>
            </div>
        </div>
    )
}
export default Footer;