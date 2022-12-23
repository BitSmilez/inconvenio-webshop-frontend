import CategoryPage from "../CategoryPage/CategoryPage";
import {useParams} from "react-router-dom";

const SearchPage = () => {
    const { query } = useParams()
    let url = `http://localhost:8080/product/find?keyWord=${query}`

    return (
        <CategoryPage url={url} titel={"search results"}/>
    )
}

export default SearchPage;