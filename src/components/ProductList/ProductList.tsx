import ProductItem from "../ProductItem/ProductItem";
import {useFetch} from "../../hooks/useFetch";
import CircularLoader from "../CircularLoader/CircularLoader";
import "./ProductList.css";
import SearchLabel from "../SearchLabel/SearchLabel";
import NotifyDiv from "../NotifyDiv/NotifyDiv";
import {useEffect} from "react";
import CartProductItem from "../CartProductItem/CartProductItem";

const ProductList = ({url, label, callback}: { url: string, label: string, callback: any }) => {

    const {fetchedData: products, isLoading, errMsg}: any = useFetch(url);

    const handleCallback = (products: any) => {
        callback(products);
    }

    useEffect(() => {
        if (callback) {
            handleCallback(products);
        }
    }, [products])

    return (
        <>
            {isLoading && <CircularLoader/>}
            {label && <SearchLabel text={label}/>}
            <div className={callback == null ? "product-container" : "cart-container"}>
                {errMsg && <div> {errMsg} </div>}
                {products.length === 0 && <NotifyDiv notifyMessage={"Sorry, no products found :("}/>}
                {products && products.items == null
                    ? products.map((product: any) => (<ProductItem key={product.id} product={product}/>))
                    : products.items.map((product: any) => (<CartProductItem key={product.productID} product={product}/>))}
            </div>
        </>
    )
}
export default ProductList;