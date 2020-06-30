import React, { Component } from 'react'
import ProductItem from './ProductItem'
import ProductItemRFC from './ProductItemRFC';

export default class DemoProps extends Component {
    render() {
        let product = {
            id: 1, 
            name: 'Iphone X',
            price: 1200
        }
        let title = 'CYBERSOFT';
        return (
            <div className="container">
                <input defaultValue="hello fe41" />
                <ProductItem titleData={title} productData={product}/>
                <ProductItemRFC productData={product}/>
            </div>

        )
    }
}
