import React, { Component } from 'react'

export default class EventBinding extends Component {

    // handle click
    handleClick = (name) => {
        alert(`Hello ${name}`);
    }

    render() {
        return (
            <div className="mt-3">
                Event binding<br/><br/>

                {/* Cách 1 định nghĩa function trức tiếp */}
                {/* <button onClick={() => {
                    alert('Hello guys')
                }} id="btnShowMessage" type="button" className="btn btn-primary">Show Message</button> */}

                {/* Cách 2 truyền callback fucntion => khi click function đó được gọi */}
                {/* this là thể hiện của class EventBinding */}
                {/* <button onClick={this.handleClick.bind(this, 'Hao')} id="btnShowMessage" type="button" className="btn btn-primary">Show Message</button> */}

                {/* Cách 3 định nghĩa function trức tiếp có tham số*/}
                <button onClick={() => {
                    // Định nghĩa những xử lý khi button click
                    this.handleClick('Hào');
                }} id="btnShowMessage" type="button" className="btn btn-primary">Show Message</button>
            </div>
        )
    }
}
