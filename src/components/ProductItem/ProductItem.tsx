import "./ProductItem.css";
import DiscountBadge from "../DiscountBadge/DiscountBadge";
import {useNavigate} from "react-router-dom";
import {AddShoppingCart} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useAlert} from 'react-alert'
import {CustomerContext} from "../../context/CustomerContext";
import {useContext} from "react";
import ProductItemInfo from "./ProductItemInfo";
import ProductItemPriceArea from "./ProductItemPriceArea";


const ProductItem = ({product}: { product: any }) => {

    const navigate = useNavigate();
    const alert = useAlert()
    const {changeCartItemCount}: any = useContext(CustomerContext);


    const handleGoToDetails = () => {
        navigate({
            pathname: "/products",
            search: "?product=" + product.id,
        });
    }
    const handleQuickAddToCart = async (e: any) => {
        e.stopPropagation();
        fetch("http://localhost:8080/add-to-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productID: product.id.toString(),
                quantity: 1,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    changeCartItemCount(1);
                    alert.show("Item Added to cart!")
                } else {
                    alert.show("Error adding item to cart!")
                }
            });
    }


    return (
        <div onClick={() => handleGoToDetails()} className="product-item">
            <div className="product-item-image">
                <IconButton onClick={(e) => handleQuickAddToCart(e)} sx={{position: "absolute"}}
                            className={"pList-add-to-cart-icon"} color="default"
                            aria-label="Add to cart">
                    <AddShoppingCart/>
                </IconButton>
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