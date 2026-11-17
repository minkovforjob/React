function OrderStatus({ orderId, status }) {
    console.log(orderId + ":  " + status);
    return (
        <li>
            <h4>Заказ #{orderId}: {status}</h4>

        </li>);
}

export default OrderStatus;
