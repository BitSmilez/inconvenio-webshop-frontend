import {useSearchParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import NavBar from "../components/NavBar/NavBar";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import CircularLoader from "../components/CircularLoader/CircularLoader";
import "./Pages.css";
import ProductCarousel from "../components/ProductCaroussel/ProductCarousel";

const ProductDetailsPage = () => {

    const [productid] = useSearchParams();
    const id = productid.get("product");
    const {fetchedData: product, isLoading, errMsg}: any = useFetch("http://localhost:8085/product/" + id);

    return (
        <>
            <NavBar/>
            <div className={"product-details-wrapper"}>
                {isLoading && <CircularLoader/>}
                {errMsg && <div> {errMsg} </div>}
                {product && <ProductDetails product={product}/>}
            </div>
            <ProductCarousel category={product.category} remove_id={product.id}/>
        </>
    )
}

export default ProductDetailsPage;