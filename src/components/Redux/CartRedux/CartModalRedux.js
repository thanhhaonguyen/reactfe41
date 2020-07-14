import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inscreaseQuantity, descreaseQuantity } from './../../../redux/action/cartAction';
import { addUpTotalPrice } from './../../../selectors/cartSelectors';

class CartModalRedux extends Component {

    renderCart = (cartArray) => {
        return cartArray.map((product) => {
            return <tr key={product.maSP}>
                <td style={{ width: 100 }}>
                    <img className="img-fluid" src={product.hinhAnh} alt="productImage" />
                </td>
                <td>{product.maSP}</td>
                <td>{product.tenSP}</td>
                <td className="input-group text-center" style={{ width: 160, margin: "0 auto" }}>
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-primary" onClick={() => this.props.inscreaseQuantity(product.maSP)}><i className="fa fa-plus"></i></button>
                    </div>
                    {/* <input type="text" className="form-control text-center" aria-label="Amount (to the nearest dollar)" value={this.state.quantity} onChange={this.onChangeQuantity}/> */}
                    <span style={{ width: 50 }}>{product.quantity}</span>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-danger" onClick={() => this.props.descreaseQuantity(product.maSP)}><i className="fa fa-minus"></i></button>
                    </div>
                </td>
                <td>{product.giaBan.toLocaleString()}</td>
                <td>{(product.giaBan * product.quantity).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        })
    }

    render() {
        let { cartArray } = this.props;
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
                                    {this.renderCart(cartArray)}
                                </tbody>
                                {
                                    cartArray.length > 0 &&
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td><b>Total:</b></td>
                                            <td>{this.props.addUpTotalPrice.toLocaleString()}</td>
                                        </tr>
                                    </tfoot>
                                }
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

const mapStateToProps = state => {
    return {
        cartArray: state.cartReducer.cartArray,
        addUpTotalPrice: addUpTotalPrice(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inscreaseQuantity: (productId) => dispatch(inscreaseQuantity(productId)),
        descreaseQuantity: (productId) => dispatch(descreaseQuantity(productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModalRedux);