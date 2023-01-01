const ProductItemPriceArea = ({price, salesPrice}: { price: number, salesPrice: number }) => {
    return (
        <div className={"product-item-price-area"}>
            {salesPrice &&
                <p className="product-item-sales-price">{"$" + salesPrice.toFixed(2)}</p>
            }
            <p className={salesPrice != null
                ? "product-item-price-if-on-sale"
                : "product-item-price-normal"}>
                {"$" + price.toFixed(2)}</p>
        </div>
    )
}

export default ProductItemPriceArea;