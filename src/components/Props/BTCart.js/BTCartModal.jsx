import React, { Component } from 'react'

export default class BTCartModal extends Component {

    // // on change quantity
    // onChangeQuantity = (event) => {
    //     this.setState({
    //         quantity: event.target.value,
    //     })
    // }

    // state = {
    //     quantity: 1
    // }

    // render cart
    renderCart = (dataCart) => {
        let { deleteCartItem, addUpQuantityPhone, descQuantityPhone } = this.props
        return dataCart.map((phone, index) => {
            return <tr key={phone.id}>
                <td>{phone.id}</td>
                <td style={{ width: 100 }}>
                    <img className="img-fluid" src={phone.image} alt="phoneImage" />
                </td>
                <td>{phone.name}</td>
                <td className="input-group text-center" style={{ width: 160, margin: "0 auto" }}>
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-success" onClick={() => {
                            addUpQuantityPhone(phone.id)
                        }}><i className="fa fa-plus"></i></button>
                    </div>
                    {/* <input type="text" className="form-control text-center" aria-label="Amount (to the nearest dollar)" value={this.state.quantity} onChange={this.onChangeQuantity}/> */}
                    <span style={{ width: 50 }}>{phone.quantity}</span>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-success" onClick={() => {
                            descQuantityPhone(phone.id)
                        }}><i className="fa fa-minus"></i></button>
                    </div>
                </td>
                <td>{phone.price.toLocaleString()}</td>
                <td>{(phone.price * phone.quantity).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        deleteCartItem(phone.id)
                    }}>Delete</button>
                </td>
            </tr>
        })
    }

    addUpTotalPrice = (dataCart) => {
        return dataCart.reduce((total, phone, index) => {
            return total += phone.quantity * phone.price
        }, 0);
    }

    render() {
        let { dataCart } = this.props
        return (
            <div className="modal fade" id="cartAssignment" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Cart</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCart(dataCart)}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5"></td>
                                        <td><b>Total:</b></td>
                                        <td>{this.addUpTotalPrice(dataCart).toLocaleString()}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
