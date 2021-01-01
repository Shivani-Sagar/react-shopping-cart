
import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./components/ProductList"
class App extends Component{
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
   
  
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main"><p><ProductList products={this.state.products} /></p></div>
            <div className="sidebar">cart</div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
  }
}

export default App;
