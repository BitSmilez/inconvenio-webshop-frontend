import "./CategoryBar.css";
import {useNavigate} from "react-router-dom";

const CategoryBar = () => {

    const navigate = useNavigate();
    const handleCategoryClick = (category: string) => {
        navigate(`/products/category/${category}`);
    }

    return(
        <div className="category-bar">
            <ul>
                <li className={"category-bar-label"} onClick={() => handleCategoryClick("cutlery")}>CUTLERY</li>
                <li className={"category-bar-label"} onClick={() => handleCategoryClick("clothes")}>CLOTHES</li>
                <li className={"category-bar-label"} onClick={() => handleCategoryClick("tableware")}>TABLEWARE</li>
                <li className={"category-bar-sale-label"} onClick={() => handleCategoryClick("sale")}>%SALE</li>
            </ul>
        </div>
    )
}

export default CategoryBar;