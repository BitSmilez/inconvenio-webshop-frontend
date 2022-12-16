import "./CircularLoader.css";
import {CircularProgress} from "@mui/material";

const CircularLoader = () => {
    return (
        <div className="circular-loader-container">
            <CircularProgress />
        </div>
    )
}

export default CircularLoader;