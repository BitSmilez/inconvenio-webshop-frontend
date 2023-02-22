import "./ProductItem.css";
import DiscountBadge from "../DiscountBadge/DiscountBadge";
import {useNavigate} from "react-router-dom";
import {AddShoppingCart} from "@mui/icons-material";
import {IconButton, Tooltip} from "@mui/material";
import {useAlert} from 'react-alert'
import {CustomerContext} from "../../context/CustomerContext";
import {useContext} from "react";
import ProductItemInfo from "./ProductItemInfo";
import ProductItemPriceArea from "./ProductItemPriceArea";
import {addToCart} from "../../utils/helpers/cartHelper";


const ProductItem = ({product}: { product: any }) => {

    const navigate = useNavigate();
    const alert = useAlert()
    const {customer, setCustomer}: any = useContext(CustomerContext);


    const handleNavigateToDetails = (e: any) => {
        const target = e.target as HTMLElement;
        if (!target.closest(`[data-testid="addToCartButton"]`)) {
            navigate({
                pathname: "/products",
                search: "?product=" + product.id,
            });
        }
    }
    const handleAddToCart = async () => {
        await addToCart(product.id.toString(), 1, customer.customerID, setCustomer, alert);
    }


    return (
        <div onClick={(e) => handleNavigateToDetails(e)} className="product-item">
            <div className="product-item-image">
                <Tooltip title="Add to Cart">
                <IconButton onClick={() => handleAddToCart()}
                            data-testid="addToCartButton"
                            sx={{position: "absolute"}}
                            className={"pList-add-to-cart-icon"}
                            color="default"
                            aria-label="Add to cart">
                    <AddShoppingCart/>
                </IconButton>
                </Tooltip>
                {product.salesPrice &&
                    <DiscountBadge price={product.price} discountedPrice={product.salesPrice}/>
                }
                <img className={"product-image"} src={product.img} alt={product.name}/>
            </div>
            <div className="product-item-info">
                <ProductItemInfo name={product.name} desc={product.description}/>
                <ProductItemPriceArea price={product.price} salesPrice={product.salesPrice}/>
            </div>
        </div>
    )
}

export default ProductItem;