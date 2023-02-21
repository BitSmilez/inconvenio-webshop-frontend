import "./AccountContent.css";
import {useContext} from "react";
import {CustomerContext} from "../../context/CustomerContext";
import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";
import LinkButton from "../LinkButton/LinkButton";
import CustomerDetails from "../CustomerDetails/CustomerDetails";
import OrderHistory from "../OrderHistory/OrderHistory";

const AccountContent = () => {

    const {getCustomerInfo}: any = useContext(CustomerContext);

    return (
        <div className={"account-page-container"}>
            <div className={"account-page-headline"}>
                <GenericPageHeadline text={"Hello, " + getCustomerInfo().firstname + " !"}/>
            </div>
            <div className={"account-button-row"}>
                <LinkButton URL={"/"} text={"Back to Shop"}></LinkButton>
            </div>
            <div className={"account-page-content"}>
                <div className={"account-page-content-left"}>
                    <CustomerDetails/>
                </div>
                <div className={"account-page-content-right"}>
                    <OrderHistory/>
                </div>
            </div>
        </div>

    )
}

export default AccountContent;