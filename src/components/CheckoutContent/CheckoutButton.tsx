import "./Checkout.css";

const CheckoutButton = ({ checkout }: { checkout: any }) => {

    const isCheckoutValid = () => {
        return Object.values(checkout).every((value) => value !== "");
    }

    return (
        <div className={"checkout-button-row"}>
            <button disabled={!isCheckoutValid()}
                    type={"submit"}
                    form={"checkout-form"}
                    className={"checkout-button"}>
                PLACE ORDER
            </button>
        </div>
    )
}

export default CheckoutButton;