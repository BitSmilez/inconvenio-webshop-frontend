import "./CustomerDetails.css";
import {EditRounded, EmailRounded, PermIdentityRounded} from "@mui/icons-material";
import CustomDivider from "../CustomDivider/CustomDivider";
import {useContext} from "react";
import {CustomerContext} from "../../context/CustomerContext";

const CustomerDetails = () => {

    const {getCustomerInfo, customer}: any = useContext(CustomerContext);
    const customerDetails = getCustomerInfo();

    return (
        <div>
            <h1>ACCOUNT DETAILS</h1>
            <div className={"account-details-container"}>
                <div className={"account-details-entry"}>
                    <p><PermIdentityRounded sx={{mb: -0.7, mr: 1}}/> {customer.customerID}</p>
                </div>
                <CustomDivider color={"#252525"}/>
                <div className={"account-details-entry"}>
                    <p><EditRounded
                        sx={{mb: -0.7, mr: 1}}/> {customerDetails.firstname} {customerDetails.lastname}</p>
                </div>
                <CustomDivider color={"#252525"}/>
                <div className={"account-details-entry"}>
                    <p><EmailRounded sx={{mb: -0.7, mr: 1}}/> {customerDetails.email}</p>
                </div>
            </div>
        </div>)
}

export default CustomerDetails;