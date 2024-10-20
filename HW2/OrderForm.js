// src/components/OrderForm.js
import React, { useState } from 'react';

const OrderForm = ({ addOrder }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { productName, price: parseFloat(price), quantity: parseInt(quantity, 10) };
    addOrder(newOrder);
    setProductName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
