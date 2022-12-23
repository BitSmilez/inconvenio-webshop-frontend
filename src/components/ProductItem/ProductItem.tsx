import "./ProductItem.css";
import DiscountBadge from "../DiscountBadge/DiscountBadge";
import {useNavigate} from "react-router-dom";

const ProductItem = ({product}: { product: any }) => {

    const navigate = useNavigate();

    const handleGoToDetails = () => {
        navigate({
            pathname: "/products",
            search: "?product=" + product.id,
        });
    }

    return (
        <div onClick={() => handleGoToDetails()} className="product-item">
            <div className="product-item-image">
                {product.salesPrice &&
                    <DiscountBadge price={product.price} discountedPrice={product.salesPrice}/>
                }
                <img className={"product-image"} src={product.img} alt={product.name}/>
            </div>
            <div className="product-item-info">
                <h3 className={"product-item-name"}>{product.name}</h3>
                <p className={"product-item-desc"}>{product.description}</p>
                <div className={"product-item-price-area"}>
                    {product.salesPrice &&
                        <p className="product-item-sales-price">{"$" + product.salesPrice.toFixed(2)}</p>
                    }
                    <p className={product.salesPrice != null
                        ? "product-item-price-if-on-sale"
                        : "product-item-price-normal"}>
                        {"$" + product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;