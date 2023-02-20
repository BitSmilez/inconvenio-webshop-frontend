import "./AdBanner.css";
import {useFetch} from "../../hooks/useFetch";

const AdBanner = ({bannerMessage}: { bannerMessage: string }) => {

    const {fetchedData: banner}: any = useFetch("https://api.kanye.rest/");

    return (
        <div className="ad-banner">
            {bannerMessage ? bannerMessage : "'" + banner?.quote + "' - Kanye Rest"}
            <p className={"free-shipping-text"}>(PS: Free Shipping for orders over 100$)</p>
        </div>
    );
}

export default AdBanner;