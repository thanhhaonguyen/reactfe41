import React, { Component } from 'react'

export default class BTProductLaptop extends Component {
    render() {
        let { productData } = this.props;
        return (
            <div>
                {/* BEGIN LAPTOP */}
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={productData.hinhAnh} alt="cardImage" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{productData.tenSP}</h4>
                            <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                            <a href="/#" className="btn btn-primary mr-2">Detail</a>
                            <a href="/#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
                {/* END LAPTOP */}
            </div>
        )
    }
}
