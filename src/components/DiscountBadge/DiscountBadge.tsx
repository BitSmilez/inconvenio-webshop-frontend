import "./DiscountBadge.css";
const DiscountBadge = ({ price, discountedPrice }: {price: number, discountedPrice: number} ) => {

    const discountPercentage = Math.floor((price - discountedPrice) / price * 100);

    return(
        <span className="discount-badge">-{discountPercentage}%</span>
    )
}

export default DiscountBadge;