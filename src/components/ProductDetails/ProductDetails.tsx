import "./ProductDetails.css";
import ProductDetailsSideInfos from "./ProductDetailsSideInfos";
import ProductDetailsRating from "./ProductDetailsRating";
import ProductDetailsPriceArea from "./ProductDetailsPriceArea";
import ProductDetailsMainInfos from "./ProductDetailsMainInfos";
import ProductDetailsDesc from "./ProductDetailsDesc";
import ProductDetailsImage from "./ProductDetailsImage";
import ProductDetailsButtonArea from "./ProductDetailsButtonArea";
import {useEffect} from "react";

const ProductDetails = ({product}: { product: any }) => {


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
                    <ProductDetailsPriceArea price={product.price} salesPrice={product.salesPrice}/>
                    <ProductDetailsButtonArea/>
                </div>
                <hr/>
                <ProductDetailsDesc productDetailsDesc={product.detailedDescription}/>
            </div>
        </div>
    )
}

export default ProductDetails;