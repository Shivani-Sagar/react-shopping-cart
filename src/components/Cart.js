import React, { Component } from "react";
import formatCurrency from "./util";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showcheckout: false,
    };
  }
  handleClick = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  render() {
    const { cartItems } = this.props;
    console.log("cartItme", cartItems.length);
    return (
      <div>
        {cartItems.length == 0 ? (
          <div className="cart cart-header">cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in cart{" "}
          </div>
        )}
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => {
              console.log(item);
              return (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    {item.title}
                    {formatCurrency(item.price)} x {item.count}{" "}
                    <button onClick={() => this.props.removeCartItems(item)}>
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {cartItems.length !== 0 ? (
          <div className="cart">
            <div className="total">
              <div>
                Total :{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button className="button primary"  onClick={() => {
                      this.setState({ showcheckout: true });
                    }}>Proceed</button>
            </div>
           
          </div>
        ) : (
          ""
        )}
         {this.state.showcheckout && (
              <div className="cart">
                <form onSubmit={this.createOrder}>
                  <ul className="form-container">
                    <li>
                      <label>email</label>
                      <input
                        type="email"
                        required
                        name="email"
                        onChange={this.handleClick}
                      ></input>
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        onChange={this.handleClick}
                      ></input>
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        type="text"
                        required
                        name="address"
                        onChange={this.handleClick}
                      ></input>
                    </li>
                    <li>
                      <button className="button primary" type="submit">Checkout</button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
      </div>
    );
  }
}
