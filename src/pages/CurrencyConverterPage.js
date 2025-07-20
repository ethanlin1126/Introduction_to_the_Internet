import React, { useState } from "react";
import axios from "axios";
import './CurrencyConverter.css';

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TWD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.error("Currency conversion error:", error);
    }
  };

  const currencyOptions = [
    { code: "USD", name: "US Dollar (USD)" },
    { code: "EUR", name: "Euro (EUR)" },
    { code: "JPY", name: "Japanese Yen (JPY)" },
    { code: "GBP", name: "British Pound (GBP)" },
    { code: "AUD", name: "Australian Dollar (AUD)" },
    { code: "CAD", name: "Canadian Dollar (CAD)" },
    { code: "CHF", name: "Swiss Franc (CHF)" },
    { code: "CNY", name: "Chinese Yuan (CNY)" },
    { code: "HKD", name: "Hong Kong Dollar (HKD)" },
    { code: "TWD", name: "New Taiwan Dollar (TWD)" },
    { code: "SGD", name: "Singapore Dollar (SGD)" },
    { code: "KRW", name: "South Korean Won (KRW)" },
    { code: "INR", name: "Indian Rupee (INR)" },
  ];

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {currencyOptions.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencyOptions.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </select>
      <button onClick={convertCurrency}>Convert</button>

      {convertedAmount && (
        <p>Converted Amount: {convertedAmount} {toCurrency}</p>
      )}
    </div>
  );
}

export default CurrencyConverter;
