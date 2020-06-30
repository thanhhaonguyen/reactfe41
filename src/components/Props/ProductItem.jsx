import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        // this.props la thuoc tinh cua lop component nhan gia tri tu component cha truyen vao, va khong gan lai gia tri khac duoc
        // let productData = this.props.productData; khai bao trong es5
        let {productData, titleData} = this.props;
        return (
            <div>
                <h3>{titleData}</h3>
                <div className="card text-white bg-secondary" style={{width: 300}}>
                    <img className="card-img-top" src="holder.js/100px180/" alt="Image" />
                    <div className="card-body">
                        <h4 className="card-title">{productData.name}</h4>
                        <p className="card-text">{productData.price}</p>
                    </div>
                </div>
            </div>

        )
    }
}
