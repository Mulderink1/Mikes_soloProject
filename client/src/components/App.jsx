import React, { Component } from 'react'
import StockFrame from './StockFrame';

const getTickerURL = 'http://localhost:3000/getTicker'
const addTickerURL = 'http://localhost:3000/addTicker'
const deleteTickerURL = 'http://localhost:3000/deleteTicker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockFrames: [],
      addTickerPriceStr: '',
      addTickerStr: '',
      deleteTickerStr: ''
    }
    this.getTicker = this.getTicker.bind(this)
    this.addTicker= this.addTicker.bind(this)
    this.addTickerPriceStr = this.addTickerPriceStr.bind(this)
    this.addTickerStr = this.addTickerStr.bind(this)
    this.deleteTicker = this.deleteTicker.bind(this)
    this.deleteTickerStr = this.deleteTickerStr.bind(this)
  }


  getTicker(url) {
    fetch(url)
      .then((response) => response.json()
      )
      .then((json) => {
        this.setState({
          stockFrames: json,
        })
        return;
      })
  }


  addTicker() {
    fetch(addTickerURL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stock: this.state.addTickerStr,
        price: this.state.addTickerPriceStr
      })
    })
    .then(() => { 
      fetch(getTickerURL)
      .then((response) => response.json()
      )
      .then((json) => {
        this.setState({
          stockFrames: json,
        })
        return;
      })
    });
  }

  addTickerPriceStr(e) {
    this.setState({
      addTickerPriceStr: e.target.value,
    })
  }

  addTickerStr(e) {
    this.setState({
      addTickerStr: e.target.value,
    })
  }


  deleteTicker() {
    fetch(deleteTickerURL, {
      method: "delete",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stock: this.state.deleteTickerStr
      })
    })
    .then(() => { 
      fetch(getTickerURL)
      .then((response) => response.json()
      )
      .then((json) => {
        this.setState({
          stockFrames: json,
        })
        return;
      })
    });
  }

  deleteTickerStr(e){
    this.setState({
      deleteTickerStr: e.target.value,
    })
  }


  componentDidMount() {
    this.getTicker(getTickerURL)
  }
  

  render() { 
    
    const stockFramesArr = [];
    for (let i = 0; i < this.state.stockFrames.length; i += 1) {
      if (i >= 6) break;
      stockFramesArr.push(<StockFrame stock_ticker = {this.state.stockFrames[i].stock_ticker} price_paid = {this.state.stockFrames[i].price_paid} deleteTicker = {this.deleteTicker} />)
    }
    
    return (
    <div className="outerBox">
      <h1 className="mike ">
        Mikeys Making Paper Today!
      </h1>
      <h1 className="addStocks">
        Stock:<input onChange={this.addTickerStr}></input>
        Price:<input onChange={this.addTickerPriceStr}></input>
        <button onClick={this.addTicker}>Add Stock</button>
      </h1>
      <h1>
        Stock:<input onChange={this.deleteTickerStr}></input>
        <button onClick={this.deleteTicker}>Remove Stock</button>
      </h1>
      {stockFramesArr}
    </div>
    )
  }
}

export default App;