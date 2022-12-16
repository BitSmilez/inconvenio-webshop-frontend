import {useEffect, useState} from "react";

export const useFetch = (url: string) => {

    const [fetchedData, setFetchedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    // Fetch products from Test API
    useEffect(() => {

        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch products from API");
                }
                return res.json()
            })
            .then(data => {
                setFetchedData(data);
                setErrMsg(null);
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    setIsLoading(false);
                    setErrMsg(err.message);
                }
            })
    }, [url])

    return {fetchedData, isLoading, errMsg};
}