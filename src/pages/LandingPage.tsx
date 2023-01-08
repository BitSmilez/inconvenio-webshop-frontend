import NavBar from "../components/NavBar/NavBar";
import ProductList from "../components/ProductList/ProductList";

const LandingPage = () => {
    return (
        <>
            <NavBar/>
            <ProductList label={"All Products"} url={"http://localhost:8080/products"} callback={null}/>
        </>
    );
}

export default LandingPage;