import "./ProductDetails.css";
import ProductDetailsSideInfos from "./ProductDetailsSideInfos";
import ProductDetailsRating from "./ProductDetailsRating";
import ProductDetailsPriceArea from "./ProductDetailsPriceArea";
import ProductDetailsMainInfos from "./ProductDetailsMainInfos";
import ProductDetailsDesc from "./ProductDetailsDesc";
import ProductDetailsImage from "./ProductDetailsImage";
import ProductDetailsButtonArea from "./ProductDetailsButtonArea";
import {useContext, useEffect, useState} from "react";
import {CustomerContext} from "../../context/CustomerContext";
import {useAlert} from "react-alert";

const ProductDetails = ({product}: { product: any }) => {


    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const {changeCartItemCount}: any = useContext(CustomerContext);
    const alert = useAlert()

    const handleQuantityChange = (quantity: number) => {
        if (quantity >= 1) {
            setSelectedQuantity(quantity);
        }
    }
    const handleAddToCart = () => {
        fetch("http://localhost:8080/add-to-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productID: product.id.toString(),
                quantity: selectedQuantity,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    changeCartItemCount(selectedQuantity);
                    alert.show("Item Added to cart!")
                } else {
                    alert.show("Error adding item to cart!")
                }
            });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })


    return (
        <div className={"product-details-container"}>
            <div className={"product-details-image-area"}>
                <ProductDetailsImage image={product.img} alt={product.name}/>
                <ProductDetailsSideInfos category={product.category}
                                         designer={product.designer}
                                         country={product.productOrigin}
                                         material={product.material}/>
            </div>
            <div className={"product-details-info"}>
                <ProductDetailsMainInfos productName={product.name} productCategory={product.category}/>
                <ProductDetailsRating rating={4}/>
                <hr/>
                <div className={"product-details-price-area"}>
                    <ProductDetailsPriceArea price={product.price}
                                             salesPrice={product.salesPrice}
                                             quantity={selectedQuantity}
                                             changeQuantity={handleQuantityChange}/>
                    <ProductDetailsButtonArea addToCart={handleAddToCart}/>
                </div>
                <hr/>
                <ProductDetailsDesc productDetailsDesc={product.detailedDescription}/>
            </div>
        </div>
    )
}

export default ProductDetails;