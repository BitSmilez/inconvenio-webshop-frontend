import "./ProductDetails.css"
import {DoubleArrowOutlined} from "@mui/icons-material";

const ProductDetailsMainInfos = ({productName, productCategory}: { productName: string, productCategory: string }) => {
    return (
        <>
            <p className={"category-label"}>{productCategory}</p>
            <h3 className={"product-name"}><DoubleArrowOutlined/> {productName}</h3>
        </>
    )
}
export default ProductDetailsMainInfos;