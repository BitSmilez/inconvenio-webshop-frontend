import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import AdBanner from "./components/AdBanner/AdBanner";
import ImprintPage from "./pages/ImprintPage";
import LegalPage from "./pages/LegalPage";
import FAQPage from "./pages/FAQPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";



const App = () => {

    // TODO: Dynamic Messages from API
    const bannerMessage = "FREE SHIPPING ON ORDERS OVER $100";

    return (
        <>
            {/* Components that are always shown on every Route */}
            <AdBanner bannerMessage={bannerMessage}/>
            {/* Routes */}
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/imprint" element={<ImprintPage/>}/>
                    <Route path="/privacy" element={<LegalPage/>}/>
                    <Route path="/faq" element={<FAQPage/>}/>
                    <Route path="/terms" element={<TermsAndConditionsPage/>}/>
                    <Route path="/refunds" element={<ReturnPolicyPage/>}/>
                    <Route path ="/products" element={<ProductDetailsPage/>}/>
                    <Route path="/products/search/:query" element={<SearchPage/>}/>

                    {/*Fallback Route */}
                    <Route path="*" element={<ErrorPage/>}/>                    

                </Routes>
            </Router>
        </>
    );
}

export default App;