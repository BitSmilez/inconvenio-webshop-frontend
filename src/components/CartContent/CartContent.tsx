import CartProductItem from "../CartProductItem/CartProductItem";
import "./CartContent.css"
import {ShoppingBag} from "@mui/icons-material";
import {useFetch} from "../../hooks/useFetch";
import LinkButton from "../LinkButton/LinkButton";
const CartContent = () => {

    const CustomDivider = ({ color }: {color: string}) => {
        return (
            <hr  style={{
                color: color,
                backgroundColor: color,
                height: .5,
            }}/>
        )
    }

    const {fetchedData: cart}: any =  useFetch("http://localhost:8081/cart/1234")
    let products = cart.items
    cart["shipping"] = 0

    return (
        <>

            <div className={"cart-button-row"}>
                <LinkButton URL={"/"} text={"Continue Shopping"}></LinkButton>
                <LinkButton URL={"/checkout"} text={"Continue Shopping"}></LinkButton>
            </div>
            {products && products.map((product: any) => (
                <CartProductItem key={product.productID} product={product}/>
            ))}
                <div className={"cart-details-container"}>
                    <div className={"cart-summary-headline-container"}>
                        <h1 className={"cart-summary-headline"}>YOUR ORDER IS READY</h1>
                        <ShoppingBag fontSize={"large"} sx={{mt: 1.75}}/>
                    </div>
                    <div className={"cart-summary-details"}>
                        <CustomDivider color={"#000000"}/>
                        <p> Price: {cart.total}€ <br/> including {cart.vat}€ VAT ({cart.taxRate}%)  </p>
                        <p> Shipping: {cart.shipping}€ </p>
                        <CustomDivider color={"#000000"}/>
                        <p className={"cart-summary-total"}> Total: {cart.total}€ </p>
                    </div>
                </div>

        </>
    )
}
export default CartContent;
