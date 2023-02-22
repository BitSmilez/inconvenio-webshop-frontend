import "./OrderItem.css";

const OrderItem = ({order}: { order: any }) => {

    const formatDate = (date: string) => {
        return new Date(date).toISOString().slice(0, 10);
    }

    return (
        <div className={"order-history-container"}>
            <div className={"order-id-date-container"}>
                <p>Order ID: {order.orderID}</p>
                <p>Payment Service: {order.paymentMethod}</p>
            </div>
            <div className={"order-service-container"}>
                <p>Order Date: {formatDate(order.orderDate)}</p>
                <p>Shipping Service: {order.shippingMethod}</p>
            </div>
            <div className={"order-total-container"}>
                <p>Total: ${order.orderTotal}</p>
            </div>
        </div>

    )
}

export default OrderItem;