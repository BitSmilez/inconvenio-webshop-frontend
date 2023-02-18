import CircularLoader from "../CircularLoader/CircularLoader";
import {Navigate} from "react-router-dom";

const AccessChecker = ({isLoading, setIsLoading, condition, nav}: {isLoading: any, setIsLoading: any, condition: any, nav: string}) => {

    setTimeout(() => {
        setIsLoading(false);
    }, 1500);

    if(isLoading) {
        return <CircularLoader/>
    }
    if(!condition) {
        return (<Navigate to={nav}/>)
    }
    return <></>
}

export default AccessChecker;