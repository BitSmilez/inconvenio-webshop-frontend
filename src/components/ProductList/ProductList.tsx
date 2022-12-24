import ProductItem from "../ProductItem/ProductItem";
import {useFetch} from "../../hooks/useFetch";
import CircularLoader from "../CircularLoader/CircularLoader";
import "./ProductList.css";
import SearchLabel from "../SearchLabel/SearchLabel";
import NotifyDiv from "../NotifyDiv/NotifyDiv";

const ProductList = ({url, label}: { url: string, label: string }) => {

    const {fetchedData: products, isLoading, errMsg} = useFetch(url);


    return (
        <>
            {isLoading && <CircularLoader/>}
            {label && <SearchLabel text={label}/>}
            <div className={"product-container"}>
                {errMsg && <div> {errMsg} </div>}
                {products.length === 0 && <NotifyDiv notifyMessage={"Sorry, no products found :("}/>}
                {products && products.map((product: any) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}
export default ProductList;