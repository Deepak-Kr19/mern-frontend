import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import "./Order.css";

export default function Order() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useContext(AppContext);
  const [error, setError] = useState();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const url = `${API_URL}/api/orders/${user.email}`;
      const result = await axios.get(url);
      setOrders(result.data);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h3>My Orders</h3>
      {error && <div className="error-message">{error}</div>}
      {orders.length === 0 && <p>You have no orders yet.</p>}

      {orders.map((order) => (
        <div key={order._id} className="order-card">
          <h4>Order ID: {order._id}</h4>
          <div className="order-meta">
            <span className="status">Status: {order.status}</span>
            <span>Total: ${order.orderValue}</span>
          </div>
          <table className="order-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item._id}>
                  <td>{item.productName}</td>
                  <td>${item.price}</td>
                  <td>{item.qty}</td>
                  <td>${item.qty * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
