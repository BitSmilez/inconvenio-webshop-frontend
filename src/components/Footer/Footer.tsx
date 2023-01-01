import "./Footer.css"
import FooterLinks from "./FooterLinks";
import FooterShopInfos from "./FooterShopInfos";
import FooterPaymentInfo from "./FooterPaymentInfo";
import FooterShippingInfos from "./FooterShippingInfos";
import {shopConstants as shop} from "../../utils/constants/shopConstants";

const Footer = () => {

    return (
        <div className={"footer-container"}>
            <div className={"footer-area-left"}>
                <FooterShopInfos shopName={shop.shopName}
                                 address={shop.shopAddress}
                                 email={shop.shopEmail}
                                 phone={shop.shopPhone}/>
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