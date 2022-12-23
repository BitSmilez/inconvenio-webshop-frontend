import {Rating} from "@mui/material";

const ProductDetailsRating = ({rating}: {rating: number }) => {
    return(
        <Rating sx={{mb: -1}} name="read-only" value={rating} readOnly/>
    )
}
export default ProductDetailsRating;