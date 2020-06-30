import React from 'react'
import BT2ProductItem from './BT2ProductItem';

const BT2ProductList = (props) => {

    let { productData } = props;

    const renderProductSneaker = (productData) => {
        return productData.map((product, index) => {
            return <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4">
                <BT2ProductItem productData={product} />
            </div>
        })
    }

    return (
        <div>
            <section id="laptop" className="container pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">SNEAKER SHOP</h1>
                <div className="row">
                    {renderProductSneaker(productData)}
                </div>
            </section>
        </div>
    )
}

export default BT2ProductList;