import React, { Component } from 'react';
import BTProductSmartPhone from './BTProductSmartPhone';
import BTProductLaptop from './BTProductLaptop';

export default class BTProductList extends Component {
    render() {
        return (
            <div>
                {/* BEGIN SMARTPHONE */}
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductSmartPhone />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductSmartPhone />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductSmartPhone />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductSmartPhone />
                        </div>
                    </div>
                </section>
                {/* END SMARTPHONE */}
                {/* BEGIN LAPTOP */}
                <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 className="text-center">BEST LAPTOP</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductLaptop />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductLaptop />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductLaptop />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <BTProductLaptop />
                        </div>
                    </div>
                </section>
                {/* END LAPTOP */}
            </div>
        );
    }
}
