import "./Checkout.css";

const CheckoutForm = ({checkout, setCheckout, handleSubmit}: { checkout: any, setCheckout: any, handleSubmit: any }) => {

    const handleChange = (event: any) => {
        setCheckout({...checkout, [event.target.name]: event.target.value});
    }

    return (
        <div className={"checkout-form"}>
            <form id="checkout-form" className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className={"input-field-row"}>
                    <div className="input-fields-checkout">
                        <label>Firstname
                            <input
                                type="text"
                                required
                                value={checkout.firstName}
                                onChange={(e) => handleChange(e)}
                                name="firstName"
                                placeholder="Enter Firstname..."/>
                        </label>
                    </div>
                    <div className="input-fields-checkout">
                        <label>Lastname
                            <input
                                type="text"
                                required
                                value={checkout.lastName}
                                onChange={(e) => handleChange(e)}
                                name="lastName"
                                placeholder="Enter Lastname..."/>
                        </label>
                    </div>
                </div>
                <div className={"input-field-row"}>
                    <div className="input-fields-checkout">
                        <label>E-Mail
                            <input
                                type="email"
                                required
                                value={checkout.email}
                                onChange={(e) => handleChange(e)}
                                name="email"
                                placeholder="Enter E-Mail..."/>
                        </label>
                    </div>
                    <div className="input-fields-checkout">
                        <label>Phone Number
                            <input
                                type="tel"
                                required
                                value={checkout.phone}
                                onChange={(e) => handleChange(e)}
                                name="phone"
                                placeholder="Enter Phone Number..."/>
                        </label>
                    </div>
                    <div className="input-fields-checkout">
                        <label>Country
                            <input
                                type="text"
                                required
                                value={checkout.country}
                                onChange={(e) => handleChange(e)}
                                name="country"
                                placeholder="Enter Country..."/>
                        </label>
                    </div>
                </div>
                <div className={"input-field-row"}>
                    <div className="input-fields-checkout">
                        <label>Address
                            <input
                                type="text"
                                required
                                value={checkout.address}
                                onChange={(e) => handleChange(e)}
                                name="address"
                                placeholder="Enter Address..."/>
                        </label>
                    </div>
                    <div className="input-fields-checkout">
                        <label>City
                            <input
                                type="text"
                                required
                                value={checkout.city}
                                onChange={(e) => handleChange(e)}
                                name="city"
                                placeholder="Enter City..."/>
                        </label>
                    </div>
                    <div className="input-fields-checkout">
                        <label>ZIP Code
                            <input
                                type="number"
                                required
                                value={checkout.zip}
                                onChange={(e) => handleChange(e)}
                                name="zip"
                                placeholder="Enter ZIP..."/>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;