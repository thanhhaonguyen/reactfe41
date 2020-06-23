import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    products = [
        { id: 1, name: 'Sony Xperia', price: 1000 },
        { id: 2, name: 'Iphone', price: 2000 },
        { id: 3, name: 'Samsung galaxy note 10', price: 3000 }
    ]

    renderProduct = () => {
        // Cach 1: dung vong lap for
        // let contentJSX = [];
        // for (let i = 0; i < this.products.length; i++) {
        //     // Tu 1 Object tao ra 1 the JSX
        //     let product = this.products[i];
        //     let tagTrJSX = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //     </tr>
        //     // Push tagTrJSX vao contentJSX
        //     contentJSX.push(tagTrJSX);
        // }
        // return contentJSX;

        // Cach2: dung ham Map
        let contentJSX = this.products.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td >{product.price}</td>
                </tr>)  
        })
        return contentJSX;
    }

    render() {
        return (
            <div className="container mt-4">
                <h3>Danh sách sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}
