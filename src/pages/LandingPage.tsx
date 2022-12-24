import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";

const LandingPage = () => {
    return (
        <>
            <NavBar/>
            <ProductList label={"All Products"} url={"http://localhost:8080/products"}/>
            <Footer/>
        </>
    );
}

export default LandingPage;