import OrderStatus from "./OrderStatus";

function OrderList({ OrdersData }) {
    console.log(OrdersData);

    return (<ul>
        {OrdersData.map((el) => {
            console.log(el);
            return (
                <OrderStatus
                    orderId={el.orderId}
                    status={el.status}
                />
            );
        })}
    </ul>);
}
export default OrderList;