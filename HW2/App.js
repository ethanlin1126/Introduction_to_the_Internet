// src/App.js
import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import './App.css';

const App = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const calculateTotalAmount = () => {
    return orders.reduce((total, order) => total + (order.price * order.quantity), 0).toFixed(2);
  };

  return (
    <div className="app">
      <h1>Order Management</h1>
      <OrderForm addOrder={addOrder} />
      <OrderList orders={orders} />
      <h2>Total Amount: ${calculateTotalAmount()}</h2>
    </div>
  );
};

export default App;
