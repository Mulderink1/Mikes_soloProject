import React from 'react';

const StockFrame = (props) => {
  return (
    <div>
      <h3 className="stockFrame"> 
        Stock Ticker:&nbsp;&nbsp;{props.stock_ticker}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Price Paid:&nbsp;&nbsp;${props.price_paid}&nbsp;&nbsp;&nbsp;&nbsp;
        Stock Value:&nbsp;&nbsp;${props.stock_value}
      </h3>
    </div>
  ) 
}

export default StockFrame;