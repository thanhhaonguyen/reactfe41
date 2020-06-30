import React, { Component } from 'react'
import BT3PhoneItem from './BT3PhoneItem'
// import dataPhone from './../../../Data/dataPhone.json';

export default class BT3PhoneList extends Component {

    // state
    state = {
        phoneDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }
    }

    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderPhone = () => {
        return this.dataPhone.map((phone, index) => {
            return <div key={index} className="col-4">
                <BT3PhoneItem getPhoneDetail={this.getPhoneDetail} phone={phone}/>
            </div>
        })
    }

    getPhoneDetail = (maSP) => {
        this.dataPhone.map((phone, index) => {
            if (phone.maSP === maSP) {
                this.setState({
                    phoneDetail: {
                        "maSP": phone.maSP,
                        "tenSP": phone.tenSP,
                        "manHinh": phone.manHinh,
                        "heDieuHanh": phone.heDieuHanh,
                        "cameraTruoc": phone.cameraTruoc,
                        "cameraSau": phone.cameraSau,
                        "ram": phone.ram,
                        "rom": phone.rom,
                        "giaBan": phone.giaBan,
                        "hinhAnh": phone.hinhAnh
                    }
                })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="my-4">Phone List</h3>
                <div className="row">
                    {this.renderPhone()}
                </div>
                <hr />
                <h3>Product's details</h3>
                <div className="row mt-4">
                    <div className="col-4">
                        <p className="text-center" style={{ fontSize: 20 }}>{this.state.phoneDetail.tenSP}</p>
                        <img className="card-img-top" src={this.state.phoneDetail.hinhAnh} alt="./img/vsphone.jpg" />
                    </div>
                    <div className="col-8">
                        <table className="table text-left">
                            <thead>
                                <tr>
                                    <th>Screen</th>
                                    <th>{this.state.phoneDetail.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>OS</th>
                                    <th>{this.state.phoneDetail.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Front Camera</th>
                                    <th>{this.state.phoneDetail.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Tail Camera</th>
                                    <th>{this.state.phoneDetail.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{this.state.phoneDetail.ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{this.state.phoneDetail.rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
