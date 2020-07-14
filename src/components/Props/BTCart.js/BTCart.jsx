import React, { Component } from 'react'
import BTCartModal from './BTCartModal';
import BTProductList from './BTProductList';

export default class BTCart extends Component {

    // product data
    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    // state
    state = {
        cart: [
            // {
            //     id: 1,
            //     image: './img/sp_iphonex.png',
            //     name: 'IphoneX',
            //     quantity: 1,
            //     price: '7.000.000'
            // }
        ]
    }

    // add product to cart
    addProductToCart = (phone) => {
        let productInCart = {
            id: phone.maSP,
            image: phone.hinhAnh,
            name: phone.tenSP,
            quantity: 1,
            price: phone.giaBan
        }
        let newProductInCart = [...this.state.cart];
        let index = newProductInCart.findIndex(item => item.id === productInCart.id);
        if (index !== -1) {
            newProductInCart[index].quantity += 1;
        } else {
            newProductInCart.push(productInCart);
        }
        this.setState({
            cart: newProductInCart
        })
    }

    // add up total price
    addUpQuantityCart = () => {
        return this.state.cart.reduce((total, phone, index) => {
            return total += phone.quantity;
        }, 0)
    }

    // delete cart item
    deleteCartItem = (phoneId) => {
        let productInCart = [...this.state.cart];
        let index = productInCart.findIndex(item => item.id === phoneId);
        if (index !== -1) {
            productInCart.splice(index, 1);
        }
        this.setState({
            cart: productInCart
        })
    }

    // handle plus quantity button
    addUpQuantityPhone = (phoneId) => {
        let productInCart = [...this.state.cart];
        let index = productInCart.findIndex(item => item.id === phoneId);
        if(index !== -1) {
            productInCart[index].quantity += 1;
        }
        this.setState({
            cart: productInCart
        })
    }

    // handle minus quantity button
    descQuantityPhone = (phoneId) => {
        let productInCart = [...this.state.cart];
        let index = productInCart.findIndex(item => item.id === phoneId);
        if(index !== -1) {
            if(productInCart[index].quantity > 0)
                productInCart[index].quantity -= 1;
            else
                productInCart.splice(index, 1);
        }
        this.setState({
            cart: productInCart
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <span className="text float-right border border-success p-2 rounded" data-toggle="modal" data-target="#cartAssignment" style={{ cursor: 'pointer' }}>
                    <i className="fa fa-shopping-cart text-success"></i> <b className="text-success">({this.addUpQuantityCart()})</b> <b>Cart</b>
                </span>
                <BTCartModal dataCart={this.state.cart} deleteCartItem={this.deleteCartItem} addUpQuantityPhone={this.addUpQuantityPhone} descQuantityPhone={this.descQuantityPhone}/>
                <BTProductList dataPhone={this.dataPhone} addProductToCart={this.addProductToCart} />
            </div>
        )
    }
}
