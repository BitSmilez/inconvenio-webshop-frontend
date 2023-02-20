import {useEffect, useState} from "react";
import "./OrderGif.css";

const OrderGif = ({gif_query}: {gif_query: string}) => {
    const [gifUrl, setGifUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&tag=${gif_query}&rating=g`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data && data.data.images && data.data.images.original && data.data.images.original.url) {
                    setGifUrl(data.data.images.original.url);
                } else {
                    console.error("Error fetching random GIF:", data);
                }
            })
            .catch((error) => console.error("Error fetching random GIF:", error))
            .finally(() => setLoading(false));
    }, [gif_query]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!gifUrl) {
        return <p>Error loading random GIF.</p>;
    }

    return <img className={"order-gif"} src={gifUrl} alt="Random GIF"/>;
}

export default OrderGif;