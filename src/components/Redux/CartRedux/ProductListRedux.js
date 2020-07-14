import React, { Component } from 'react'
import { connect } from "react-redux";
import ProductItemRedux from './ProductItemRedux';

class ProductListRedux extends Component {

    // render product list
    renderProduct = (productItem) => {
        return productItem.map((product) => {
            return <div key={product.maSP} className="col-4">
                <ProductItemRedux dataProduct={product} />
            </div>
        })
    }

    render() {
        let { productItem } = this.props;
        return (
            <div className="container">
                <div className="row" style={{marginTop: 50}}>
                    {this.renderProduct(productItem)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productItem: state.cartReducer.productItem,
    }
}

export default connect(mapStateToProps, null)(ProductListRedux);