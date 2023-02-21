import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import CustomerContextProvider from "./context/CustomerContext";

import {options} from "./utils/constants/alertOptions";

import AdBanner from "./components/AdBanner/AdBanner";
import Footer from "./components/Footer/Footer";

import {
    FAQContent,
    ImprintContent,
    LegalContent,
    RefundsContent,
    SuccessfulRegisterContent,
    TermsContent
} from "./utils/staticContentImport";

import {
    LandingPage,
    ProductDetailsPage,
    SearchPage,
    LoginPage,
    RegisterPage,
    CartPage,
    StaticPage,
    ErrorPage,
    CheckoutPage,
    ConfirmationPage,
    AccountPage
} from "./utils/pagesImport";


const App = () => {

    return (
        <>
            <CustomerContextProvider>
                <AlertProvider template={AlertTemplate} {...options}>
                    <AdBanner bannerMessage={""}/>
                    {/* Routes */}
                    <Router>
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/products" element={<ProductDetailsPage/>}/>
                            <Route path="/products/search/:query" element={<SearchPage/>}/>
                            <Route path="/products/category/:category" element={<SearchPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/cart" element={<CartPage/>}/>
                            <Route path="/checkout" element={<CheckoutPage/>}/>
                            <Route path="/order-confirmation" element={<ConfirmationPage/>}/>
                            <Route path="/account" element={<AccountPage/>}/>
                            {/*Static Pages */}
                            <Route path="faq" element={<StaticPage content={<FAQContent/>}/>}/>
                            <Route path="/terms" element={<StaticPage content={<TermsContent/>}/>}/>
                            <Route path="/refunds" element={<StaticPage content={<RefundsContent/>}/>}/>
                            <Route path="/imprint" element={<StaticPage content={<ImprintContent/>}/>}/>
                            <Route path="/privacy" element={<StaticPage content={<LegalContent/>}/>}/>
                            <Route path="/register-successful"
                                   element={<StaticPage content={<SuccessfulRegisterContent/>}/>}/>
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