import "./CartSummaryDetails.css";
import CustomDivider from "../CustomDivider/CustomDivider";
import CircularLoader from "../CircularLoader/CircularLoader";
import DiscountBar from "../DiscountBar/DiscountBar";
import FreeShippingRemainder from "../FreeShippingRemainder/FreeShippingRemainder";


const CartSummaryDetails = ({cart}: { cart: any }) => {

    const freeShipping = 100;
    const eligible = cart.subTotal >= freeShipping;

    if (cart) {
        return (
            <div className={"cart-summary-details"}>
                <CustomDivider color={"#000000"}/>
                <p> Subtotal: ${cart.subTotal?.toFixed(2)} <br/></p>
                <div className={"cart-summary-shipping-wrapper"}>
                    <p className={"cart-summary-shipping"}> Shipping: ${cart.shipping?.toFixed(2)}</p>
                    {!eligible && <FreeShippingRemainder freeShipping={freeShipping} cartSubTotal={cart.subTotal}/>}
                </div>
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