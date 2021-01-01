import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count}{" "}All Products</div>
        <div className="filter-sort">
        OrderList {" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            
            <option value="Latest">Latest</option>
            <option value="Lowest">Lowest</option>
            <option value="Highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
            Size {" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
            <option value="XS">XS</option>
          </select>
        </div>
      </div>
    );
  }
}
