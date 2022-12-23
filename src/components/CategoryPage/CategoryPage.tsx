import ProductList from "../ProductList/ProductList";
import LinkButton from "../LinkButton/LinkButton";

const CategoryPage = ( {url,titel}: { url: string ,titel:string},
) => {
    return (
        <div>
            <LinkButton URL={"/"} text={"Back to Shop"}/>
            <h1>{titel}</h1>
            <ProductList url={url}/>
        </div>
    )
}
export default CategoryPage;
