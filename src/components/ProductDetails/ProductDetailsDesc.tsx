import "./ProductDetails.css"
import {WysiwygOutlined} from "@mui/icons-material";

const ProductDetailsDesc = ({productDetailsDesc}: { productDetailsDesc: string }) => {
    return (
        <>
            <h3><WysiwygOutlined/> Product description</h3>
            <p className={"product-desc"}>{productDetailsDesc}</p>
        </>
    )
}
export default ProductDetailsDesc;