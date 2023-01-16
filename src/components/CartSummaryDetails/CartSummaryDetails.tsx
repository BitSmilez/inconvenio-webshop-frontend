import "./CartSummaryDetails.css";
import CustomDivider from "../CustomDivider/CustomDivider";
import CircularLoader from "../CircularLoader/CircularLoader";
import DiscountBar from "../DiscountBar/DiscountBar";


const CartSummaryDetails = ({cart}: { cart: any }) => {

    const freeShipping = 100;
    const eligible = cart.subTotal >= freeShipping;
    const missing = (freeShipping - cart.subTotal)?.toFixed(2);

    if (cart) {
        return (
            <div className={"cart-summary-details"}>
                <CustomDivider color={"#000000"}/>
                <p> Subtotal: ${cart.subTotal?.toFixed(2)} <br/></p>
                <p className={"cart-summary-shipping"}> Shipping: ${cart.shipping?.toFixed(2)}
                    {!eligible && " (Only $" + missing + " more for free Shipping!)"}</p>
                <CustomDivider color={"#000000"}/>
                <p className={"cart-summary-total"}> Total: ${cart.total?.toFixed(2)} </p>
                <p className={"cart-summary-vat"}> including {cart.totalVat?.toFixed(2)}€ VAT ({cart.taxRate}%) </p>
                <DiscountBar/>
                <CustomDivider color={"#000000"}/>
            </div>
        )
    } else {
        return <CircularLoader/>
    }
}

export default CartSummaryDetails;