import React, { Component } from 'react';
import { connect } from "react-redux";
import { addProductToCart } from "./../../../redux/action/cartAction";

class ProductItemRedux extends Component {

    render() {
        let { dataProduct } = this.props;
        return (
            <div className="card text-white bg-light text-dark">
                <img className="card-img-top" style={{ height: 350 }} src={dataProduct.hinhAnh} alt="phoneImage" />
                <div className="card-body">
                    <h4 className="card-title">{dataProduct.tenSP}</h4>
                    <p className="card-title">{dataProduct.giaBan.toLocaleString()} VND</p>
                    <button type="button" className="btn btn-success text-light" onClick={() => this.props.addProductToCart(dataProduct)}>Add to cart</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product) => dispatch(addProductToCart(product)),
    }
}

export default connect(null, mapDispatchToProps)(ProductItemRedux);