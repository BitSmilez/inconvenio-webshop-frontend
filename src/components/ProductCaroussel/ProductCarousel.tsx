import {useFetch} from "../../hooks/useFetch";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductCarousel.css";
const ProductCarousel = ({category,remove_id}:{category:string,remove_id:string}) => {

    let url = `http://localhost:8080/product/category/${category}`;
    const {fetchedData: fetched_products} = useFetch(url);
   let products = fetched_products.filter((product:any) => product.id !== remove_id);
    return (
        <div>
        <h1>You might like these totally useful awesomeness products!</h1>
        <div className={"caroussel"}>
            {products && products.map((product: any) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
        </div>

            );

}

export default ProductCarousel;