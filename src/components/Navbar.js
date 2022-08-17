import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    let total = 0;

    this.props.cart.map(
      (item) => (total += item.product.price * item.quantity)
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <h4> TeeRex Store </h4>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li> <NavLink className="navbar-brand navbar-center" to="/">
             <span>Products</span> 
          </NavLink> </li>
              <li>
                <NavLink to="/my-cart">
                  {this.props.cart.length > 0 ? (
                    <span className="label label-info">
                      {this.props.cart.length} items: (${total.toFixed(2)})
                    </span>
                  ) : null}
                  <i className="glyphicon glyphicon-shopping-cart"></i>Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart
  };
};

export default connect(mapStateToProps)(Navbar);
