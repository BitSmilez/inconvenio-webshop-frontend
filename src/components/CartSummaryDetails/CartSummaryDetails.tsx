import "./CartSummaryDetails.css";
import CustomDivider from "../CustomDivider/CustomDivider";
import CircularLoader from "../CircularLoader/CircularLoader";
import DiscountBar from "../DiscountBar/DiscountBar";


const CartSummaryDetails = ({cart}: { cart: any }) => {

    if (cart) {
        return (
            <div className={"cart-summary-details"}>
                <CustomDivider color={"#000000"}/>
                <p> Subtotal: ${cart.subTotal?.toFixed(2)} <br/></p>
                <p className={"cart-summary-shipping"}> Shipping: ${cart.shipping?.toFixed(2)} </p>
                <CustomDivider color={"#000000"}/>
                <p className={"cart-summary-total"}> Total: ${cart.total?.toFixed(2)} </p>
                <p className={"cart-summary-vat"}> including {cart.totalVat?.toFixed(2)}€ VAT ({cart.taxRate}%) </p>
                <DiscountBar/>
            </div>
        )
    } else {
        return <CircularLoader/>
    }
}

export default CartSummaryDetails;