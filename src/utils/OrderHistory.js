import React, { useState, useEffect } from "react";
import { fetchOrders } from "../utils/api";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        // Handle error
      }
    };

    getOrders();
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order Number: {order.orderNumber}, Customer: {order.customerName}, Date: {order.orderDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;