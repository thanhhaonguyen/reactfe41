import React, { Component } from 'react'
import { connect } from 'react-redux';
import CartModalRedux from './CartModalRedux';
import ProductListRedux from './ProductListRedux';

class CartsRedux extends Component {

    addUpQuantityCart = (cartArray) => {
        return cartArray.reduce((total, product) => {
            return total += product.quantity;
        }, 0)
    }

    render() {
        let { cartArray } = this.props;
        return (
            <div className="container-fluid mt-3">
                <h1 className="text-center">Cart-REDUX assignment</h1>
                <span
                    className="text float-right border border-success p-2 rounded"
                    data-toggle="modal"
                    data-target="#cartAssignment"
                    style={{ cursor: 'pointer' }}
                >
                    <i className="fa fa-shopping-cart text-success"></i>
                    <b className="text-success">({this.addUpQuantityCart(cartArray)})</b> <b>Cart</b>
                </span>
                <ProductListRedux />
                <CartModalRedux />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartArray: state.cartReducer.cartArray,
    }
}

export default connect(mapStateToProps, null)(CartsRedux);