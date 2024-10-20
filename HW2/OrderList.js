// src/components/OrderList.js
import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <h3>{order.productName}</h3>
            <p>Price: ${order.price.toFixed(2)}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Total: ${(order.price * order.quantity).toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
