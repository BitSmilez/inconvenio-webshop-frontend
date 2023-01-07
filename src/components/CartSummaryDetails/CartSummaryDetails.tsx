import "./CartSummaryDetails.css";
import CustomDivider from "../CustomDivider/CustomDivider";
import CircularLoader from "../CircularLoader/CircularLoader";


const CartSummaryDetails = ({cart}: { cart: any }) => {

    if (cart) {
        return (
            <div className={"cart-summary-details"}>
                <CustomDivider color={"#000000"}/>
                <p> Price: {cart.subTotal}€ <br/> including {cart.subTotalVat}€ VAT ({cart.taxRate}%) </p>
                <p> Shipping: {cart.shipping}€ </p>
                <CustomDivider color={"#000000"}/>
                <p className={"cart-summary-total"}> Total: {cart.total}€ <br/> including {cart.totalVat}€ VAT
                    ({cart.taxRate}%) </p>
            </div>
        )
    } else {
        return <CircularLoader/>
    }
}

export default CartSummaryDetails;