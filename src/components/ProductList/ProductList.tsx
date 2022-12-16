import ProductItem from "../ProductItem/ProductItem";
import {useFetch} from "../../hooks/useFetch";
import CircularLoader from "../CircularLoader/CircularLoader";
import "./ProductList.css";

const ProductList = ({url}: { url: string }) => {

    const {fetchedData: products, isLoading, errMsg} = useFetch(url);


    return (
        <>
            {isLoading && <CircularLoader/>}
            <div className={"product-container"}>
                {errMsg && <div> {errMsg} </div>}
                {products && products.map((product: any) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}
export default ProductList;