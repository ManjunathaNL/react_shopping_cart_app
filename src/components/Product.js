import React, { Component } from "react";
import "./product.css";
class Product extends Component {
  state = {
    inCart: this.props.inCart
  };

  addToCart = (e) => {
    e.preventDefault();

    this.props.addToCart(this.props.product);

    this.setState({
      inCart: true
    });
  };

  render() {
    const { product } = this.props;

    return (
      <div className="col-md-4">
        <figure className="card card-product">
          <div className="img-wrap">
            <img
              className="img-responsive"
              alt="img"
              src={product.imageURL}
            />
          </div>
          <figcaption className="info-wrap">
            <h4 className="name">{product.name}</h4>
            {/* <h4 className="title">{product.type}</h4> */}
            {/* <p className="desc">{product.currency}</p>
            <p className="desc">{product.color}</p>
            <p className="desc">{product.gender}</p> */}
          </figcaption>
          <div className="price-btn">
            <div className="price-wrap h5">
              <span className="price-new">Rs {product.price}</span>
            </div>
            <div className="bottom-wrap col-md-5">
              {this.state.inCart ? (
                <span className="btn-success">Added to cart</span>
              ) : (
                <a href="#" onClick={this.addToCart} className="float-right cartbtn">
                  Add to cart
                </a>
              )}
            </div>
          </div>
        </figure>
      </div>
    );
  }
}

export default Product;
