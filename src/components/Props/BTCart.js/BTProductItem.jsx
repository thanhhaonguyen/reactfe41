import React, { Component } from 'react'

export default class BTProductItem extends Component {
    render() {
        let { phone, addProductToCart } = this.props;
        return (
            <div className="card text-white bg-light text-dark">
                <img className="card-img-top" style={{ height: 350 }} src={phone.hinhAnh} alt="phoneImage" />
                <div className="card-body">
                    <h4 className="card-title">{phone.tenSP}</h4>
                    <p className="card-title">{phone.giaBan.toLocaleString()} VND</p>
                    <button type="button" className="btn btn-success text-light" onClick={() => {
                        addProductToCart(phone)
                    }}>Add to cart</button>
                </div>
            </div>
        )
    }
}
