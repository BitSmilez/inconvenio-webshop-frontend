import "./QuantitySelector.css";

const QuantitySelector = ({latestQuantity, handleChange}: {latestQuantity: number, handleChange: any}) => {

    const options = Array.from(Array(50).keys()).map((i) => i + 1);

    const handleQuantityChange = (e: any) => {
        handleChange(e.target.value);
    }

    const handleOnClick = (e: any) => {
        e.stopPropagation();
    }


    return (
        <div className={"cart-product-quantity-selector"}>
            <p className={"cart-product-quantity-label"}>Quantity</p>
            <select className={"cart-product-amount"} value={latestQuantity} onClick={(e) => handleOnClick(e)} onChange={(e) => handleQuantityChange(e)}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default QuantitySelector;