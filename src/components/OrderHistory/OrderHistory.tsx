import OrderItem from "../OrderItem/OrderItem";
import {useContext} from "react";
import {CustomerContext} from "../../context/CustomerContext";
import {useFetch} from "../../hooks/useFetch";

const OrderHistory = () => {

    const {customer}: any = useContext(CustomerContext);
    const {fetchedData: orderList, isLoading} = useFetch("http://localhost:8090/checkout/all/" + customer.customerID);

    return(
        <>
            <h1>ORDER HISTORY</h1>
            <div className={"account-order-history-container"}>
                {isLoading && <p>Please wait a few seconds...</p>}
                {orderList === undefined && <p>No orders found.</p>}
                {orderList && orderList.map((order: any) => {
                    return (
                        <OrderItem key={order.orderID} order={order}/>
                    )
                })}
            </div>
        </>
    )
}

export default OrderHistory;