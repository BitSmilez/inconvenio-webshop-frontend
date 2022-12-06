import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import AdBanner from "./components/AdBanner/AdBanner";

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
                </Routes>
            </Router>
        </>
    );
}

export default App;