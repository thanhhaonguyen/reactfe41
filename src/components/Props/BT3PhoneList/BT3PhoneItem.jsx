import React, { Component } from 'react'

export default class BT3PhoneItem extends Component {
    render() {
        let { phone, getPhoneDetail } = this.props
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={phone.hinhAnh} alt="phoneImage" />
                    <div className="card-body">
                        <h4 className="card-title">{phone.tenSP}</h4>
                        <p className="card-title">{phone.giaBan.toLocaleString()} VND</p>
                        <button type="button" className="btn bg-dark text-light" onClick={() => {
                            getPhoneDetail(phone.maSP)
                        }}>Details</button>
                    </div>
                </div>
            </div>
        )
    }
}
