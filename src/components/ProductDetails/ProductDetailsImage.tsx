import "./ProductDetails.css";
const ProductDetailsImage = ({ image, alt }: {image: string, alt: string}) => {
    return (
        <div className={"product-details-image-container"}>
            <img className={"product-details-image"} src={image} alt={alt}/>
        </div>
    )
}

export default ProductDetailsImage;