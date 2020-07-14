import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {

    // render product list
    renderPhone = (dataPhone, addProductToCart) => {
        return dataPhone.map((phone, index) => {
            return <div key={phone.maSP} className="col-4">
                        <BTProductItem phone={phone} addProductToCart={addProductToCart}/>
                    </div>
        })
    }

    render() {
        let { dataPhone, addProductToCart } = this.props;
        return (
            <div className="container">
                <h3 className="mt-4">Cart Assignment</h3>
                <div className="row mt-4">
                    {this.renderPhone(dataPhone, addProductToCart)}
                </div>
            </div>
        )
    }
}
