import React, { Component } from 'react'

export default class DataBinding extends Component {
    hocVien = {
        ma: 1,
        hoTen: 'Nguyễn Vắn A',
        hinhAnh: 'https://thaunguyen.com/blog/wp-content/uploads/2019/01/cover-a1d5b40.png'
    }
    // phương thức renderImg do user tạo
    renderImg() {
        return <img src="https://thaunguyen.com/blog/wp-content/uploads/2019/01/cover-a1d5b40.png" alt="img_1" />
    }
    // phương thức render của react Component
    render() {
        let title = 'hello fe 41';
        return (
            <div>
                <div className="container">
                    <div className="card text-left">
                        <img className="card-img-top" width={100} height={500} src={this.hocVien.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{this.hocVien.hoTen}</h4>
                        </div>
                    </div>
                </div>
                {/* binding biến */}
                <h1>{title}</h1>
                <input name={title} class="btn btn-primary" type="button" value={title} />
                {/* binding phương thức */}
                {this.renderImg()}
            </div>
        )
    }
}
