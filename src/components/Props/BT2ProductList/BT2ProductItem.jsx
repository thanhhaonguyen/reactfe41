import React from 'react'

const BT2ProductItem = (props) => {

    let { productData } = props;

    return (
        <div>
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img className="card-img-top" src={productData.image} alt="cardImage" style={{ maxWidth: '100%', height: 300 }} />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">{productData.name}</h4>
                        <p className="card-text">{productData.description}</p> 
                        <p className="card-text">{productData.price}</p>                        
                        <a href="/#" className="btn btn-success">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BT2ProductItem;