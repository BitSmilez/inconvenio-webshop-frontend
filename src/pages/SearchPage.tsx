import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";

const SearchPage = () => {
    const { query } = useParams()
    let url = `http://localhost:8080/product/find?keyWord=${query}`

    return (
        <div>
            <NavBar/>
            <ProductList label={"Search Results for '" + query + "'"} url={url}/>
            <Footer/>
        </div>
    )
}

export default SearchPage;