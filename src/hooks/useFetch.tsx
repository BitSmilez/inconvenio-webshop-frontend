import {useEffect, useState} from "react";

export const useFetch = (url: string) => {

    const [fetchedData, setFetchedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
            .then(res => {
                if (!res.ok) {
                    throw("Error Fetching Data");
                }
                if(res.status === 404) {
                    throw("No Data Found");
                }
                return res.json()
            })
            .then(data => {
                setFetchedData(data);
                setErrMsg(null);
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name === "No Data Found") {
                    console.log("No Data Found");
                }
                else {
                    setIsLoading(false);
                    setErrMsg(err.message);
                }
            })
    }, [url])

    return {fetchedData, isLoading, errMsg};
}