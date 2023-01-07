import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import AdBanner from "./components/AdBanner/AdBanner";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Footer from "./components/Footer/Footer";
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import CustomerContextProvider from "./context/CustomerContext";
import StaticPage from "./pages/StaticPage";
import FAQContent from "./components/FAQContent/FAQContent";
import TermsContent from "./components/TermsContent/TermsContent";
import RefundsContent from "./components/RefundsContent/RefundsContent";
import ImprintContent from "./components/ImprintContent/ImprintContent";
import LegalContent from "./components/LegalContent/LegalContent";
import {options} from "./utils/constants/alertOptions";
import CartPage from "./pages/CartPage";



const App = () => {

    // TODO: Dynamic Messages from API
    const bannerMessage = "FREE SHIPPING ON ORDERS OVER $100";

    return (
        <>
            <CustomerContextProvider>
                <AlertProvider template={AlertTemplate} {...options}>
                    <AdBanner bannerMessage={bannerMessage}/>
                    {/* Routes */}
                    <Router>
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/products" element={<ProductDetailsPage/>}/>
                            <Route path="/products/search/:query" element={<SearchPage/>}/>
                            <Route path="/products/category/:category" element={<SearchPage/>}/>
                            {/*Static Pages */}
                            <Route path="faq" element={<StaticPage content={<FAQContent/>}/>}/>
                            <Route path="/terms" element={<StaticPage content={<TermsContent/>}/>}/>
                            <Route path="/refunds" element={<StaticPage content={<RefundsContent/>}/>}/>
                            <Route path="/imprint" element={<StaticPage content={<ImprintContent/>}/>}/>
                            <Route path="/privacy" element={<StaticPage content={<LegalContent/>}/>}/>
                            <Route path ="/cart" element={<CartPage/>}/>
                            {/*Fallback Route */}
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </Router>
                    <Footer/>
                </AlertProvider>
            </CustomerContextProvider>
        </>
    );
}

export default App;