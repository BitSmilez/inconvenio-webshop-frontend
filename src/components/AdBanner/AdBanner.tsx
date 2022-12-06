import "./AdBanner.css";

const AdBanner = ({bannerMessage}: { bannerMessage: string }) => {

    return (
        <div className="ad-banner">
            {bannerMessage}
        </div>
    );
}

export default AdBanner;