import {useLocation, useParams} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ProductList from "../components/ProductList/ProductList";

const SearchPage = () => {
    const {query, category} = useParams()
    const location = useLocation();
    let current = location.pathname.split('/')[2];
    let url = current === "search" ? `http://localhost:8085/product/find?keyWord=${query}` : `http://localhost:8085/product/category/${category}`;

    if(category === "sale"){
        url = "http://localhost:8085/products/sale";
    }

    return (
        <div>
            <NavBar/>
            <ProductList label={current === "search" ? "Search Results for '" + query + "'" : category as string} url={url} callback={null}/>
        </div>
    )
}

export default SearchPage;