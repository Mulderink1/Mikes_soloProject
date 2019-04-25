import React from 'react';

const StockFrame = (props) => {
  return (
    <div>
      <h3 className="stockFrame"> 
        Stock Ticker: {props.stock_ticker} 
        Price Paid: {props.price_paid} 
        Stock Value: {props.stock_value}
      </h3>
    </div>
  ) 
}

export default StockFrame;