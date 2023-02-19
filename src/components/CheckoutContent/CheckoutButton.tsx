import "./Checkout.css";

const CheckoutButton = (isCheckoutValid: any) => {
    return (
        <div className={"checkout-button-row"}>
            <button disabled={!isCheckoutValid}
                    type={"submit"}
                    form={"checkout-form"}
                    className={"checkout-button"}>
                PLACE ORDER
            </button>
        </div>
    )
}

export default CheckoutButton;