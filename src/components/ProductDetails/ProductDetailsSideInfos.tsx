import "./ProductDetails.css"
const ProductDetailsSideInfos = ({category, designer, country, material}: {category: string, designer: string, country: string, material: string }) => {
    return(
        <div className={"product-details-other-infos"}>
            <div>
                <h3>Category</h3>
                <p>{category}</p>
                <h3>Material</h3>
                <p>{material}</p>
            </div>
            <div>
                <h3>Product origin</h3>
                <p>{country}</p>
                <h3>Designer</h3>
                <p>{designer}</p>
            </div>
        </div>
    )
}

export default ProductDetailsSideInfos;