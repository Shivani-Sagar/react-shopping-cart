import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  filterProducts = (event) => {
    //
    console.log(event);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  sortProducts = (event) => {
    //
     const sort = event.target.value;
    this.setState( {
      sort: sort,
      product: data.products.slice().sort((a, b) => {
       return(  sort === "Lowest"
       ? a.price < b.price
         ? 1
         : -1
       : sort === "Highest"
       ? a.price > b.price
         ? 1
         : -1
       : a._id > b._id
       ? 1
       : -1) // console.log(sort);
      
      })
    })
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Fashion Villa</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                sortProducts={this.sortProducts}
                filterProducts={this.filterProducts}
              />
              <ProductList products={this.state.products} />
            </div>
            <div className="sidebar">cart</div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
  }
}

export default App;
