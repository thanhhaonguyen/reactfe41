import React, { Component } from 'react'

export default class ExState2 extends Component {

    state = {
        urlImg: './img/CarBasic/products/red-car.jpg'
    }

    changeCarColor = (color) => {
        // if (color === 'red') {
        //     this.setState({
        //         urlImg: './img/CarBasic/products/red-car.jpg'
        //     })
        // } else if (color === 'silver') {
        //     this.setState({
        //         urlImg: './img/CarBasic/products/silver-car.jpg'
        //     })
        // } else if (color === 'black') {
        //     this.setState({
        //         urlImg: './img/CarBasic/products/black-car.jpg'
        //     })
        // }
        let newUrlImg = `./img/CarBasic/products/${color}-car.jpg`
        this.setState({
            urlImg: newUrlImg
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.urlImg} style={{ width: '100%' }} alt="CarImage" />
                    </div>
                    <div className="col-md-6 pl-5">
                        <h3 className="text-left mb-3">Change color</h3>
                        <div className="row">
                            <div className="col-md-4 text-left">
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    this.changeCarColor('red')
                                }}>Red Color</button>
                            </div>
                            <div className="col-md-4 text-left">
                                <button type="button" className="btn btn-secondary" onClick={() => {
                                    this.changeCarColor('silver')
                                }}>Silver Color</button>
                            </div>
                            <div className="col-md-4 text-left">
                                <button type="button" className="btn btn-dark" onClick={() => {
                                    this.changeCarColor('black')
                                }}>Black Color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
