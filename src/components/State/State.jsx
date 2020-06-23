import React, { Component } from 'react'

export default class State extends Component {

    // nếu như isLogin == true là người dùng đã đăng nhập => Hiển thị thông tin xin chào User
    // ngược lại isLogin == false người dùng chưa đăng nhập => Hiển thị nút đăng nhập
    userName = 'Leo';

    // state là 1 thuộc tính của component => khi state thay đổi giá trị giao diện render lại
    // Lưu ý: nhưng giá trị thay đổi giao diện thì đưa vào state
    state = {
        isLogin: false
    }

    renderLogin = () => {
        if (this.state.isLogin) {
            return <a className="nav-link">Hello {this.userName}</a>
        }
        return <button className="nav-link btn btn-success" onClick={() => {
            this.login();
        }}>Login</button>
    }

    login = () => {
        // this.state.isLogin = true; không được gán giá trị cho thuộc tính state trực tiếp
        // this.setState(newState): phương thức của component thay đổi giá trị state hiện tại và render lại giao diện
        // phương thức setState là 1 phương thức bất đồng bộ
        this.setState({
            isLogin: true
        },() => {
            // callback thực hiện sau khi state mang giá trị mới
            console.log(this.state.isLogin);
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                {this.renderLogin()}
                                {/* {this.isLogin ? <a className="nav-link">Hello {this.userName}</a> : <button className="nav-link btn btn-success">Login</button>} */}
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
