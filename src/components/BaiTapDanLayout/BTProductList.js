import React, { Component } from 'react';
import BTProductLaptop from './BTProductLaptop';

export default class BTProductList extends Component {

    renderProductSmartPhone = (dataProduct) => {
        return dataProduct.map((product, index) => {
            return  <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <BTProductLaptop productData={product}/>
                    </div>
        })
    }
    render() {
        let { dataProduct } = this.props

        return (
            <div>
                {/* BEGIN SMARTPHONE */}
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        {this.renderProductSmartPhone(dataProduct)}
                    </div>
                </section>
                {/* END SMARTPHONE */}
                {/* BEGIN LAPTOP */}
                <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 className="text-center">BEST LAPTOP</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <div className="container">
                                <div className="card bg-light" style={{ width: 300 }}>
                                    <img className="card-img-top" src="./img/lt_macbook.png" alt="cardImage" style={{ maxWidth: '100%', height: 250 }} />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-center">MACBOOK</h4>
                                        <p className="card-text">The MacBook is a brand of notebook computers manufactured by Apple Inc</p>
                                        <a href="/#" className="btn btn-primary">Detail</a>
                                        <a href="/#" className="btn btn-danger">Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END LAPTOP */}
            </div >
        );
    }
}
