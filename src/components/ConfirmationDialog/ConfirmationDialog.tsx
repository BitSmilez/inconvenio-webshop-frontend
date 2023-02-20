import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";
import shopConstants from "../../utils/constants/shopConstants";
import LinkButton from "../LinkButton/LinkButton";
import "./ConfirmationDialog.css";
import {CustomerContext} from "../../context/CustomerContext";
import {useContext} from "react";
import {useFetch} from "../../hooks/useFetch";
import OrderGif from "../OrderGif/OrderGif";

const ConfirmationDialog = () => {

    const {getCustomerInfo, customer}: any = useContext(CustomerContext);
    const customerDetails = getCustomerInfo();
    const {fetchedData: lastOrder}: any = useFetch("http://localhost:8090/checkout/latest/" + customer.customerID);
    console.log(process.env.REACT_APP_GIPHY_API_KEY);

    return (
        <div className={"order-confirm-content"}>
            <div>
                <GenericPageHeadline text={"THANK YOU, " + customerDetails.firstname + " !"}/>
            </div>
            {lastOrder && <p className={"order-number"}>Your order number is: {lastOrder?.orderID}</p>}
            <div className={"order-gif"}>
                <OrderGif gif_query={"meme"}/>
            </div>
            <p>Thank you for your purchase. We will send you a confirmation email once your order has shipped.</p>
            <p>For any questions, please contact us at {shopConstants.shopSupportEmail}.</p>
            <div>
                <LinkButton URL={"/"} text={"Back to Shop"}/>
                <LinkButton URL={"/account"} text={"My Account"}/>
            </div>
        </div>
    )
}

export default ConfirmationDialog;