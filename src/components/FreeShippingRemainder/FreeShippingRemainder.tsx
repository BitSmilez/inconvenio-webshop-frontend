import "./FreeShippingRemainder.css";

const FreeShippingRemainder = ({freeShipping, cartSubTotal}: { freeShipping: number, cartSubTotal: number }) => {

    const missing = (freeShipping - cartSubTotal)?.toFixed(2);

    return (
        <div>
            <p className={"free-shipping-notifier"}>(Only ${missing} more for free Shipping!)</p>
        </div>
    )
}

export default FreeShippingRemainder;