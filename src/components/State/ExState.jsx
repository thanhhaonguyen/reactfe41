import React, { Component } from 'react'

export default class ExState extends Component {

    state = {
        score: 0
    }

    // handle dunk onClick event
    score = () => {
        let scoreNumber = this.state.score + 1;
        this.setState({
            score: scoreNumber
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="display-4 text-left">Profile Lebron James</h3>
                    <div className="card text-white bg-dark mt-4" style={{ width: 270 }}>
                        <img className="card-img-top" src="https://i.pinimg.com/originals/22/21/55/222155f5a393706ffebbd07c1754c992.jpg" alt="Image" style={{ width: 270, height: 350 }} />
                        <div className="card-body">
                            <p className="card-title">Name: Lebron James ({this.state.score} <i className="fa fa-basketball-ball"></i>)</p>
                            <p className="card-text">Age: 35</p>
                        </div>
                    </div>
                    <div className="card text-white bg-default mt-4">
                        <div className="card-body text-left">
                            <h4 className="card-title text-dark">Score (0 <i className="fa fa-basketball-ball"></i>)</h4>
                            <button className="btn btn-default" style={{ color: 'red', border: '1px solid red' }} onClick={() => {
                                this.score()
                            }}>Dunk <i className="fa fa-basketball-ball"></i></button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
