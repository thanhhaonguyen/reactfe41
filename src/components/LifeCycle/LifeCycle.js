import React, { Component } from 'react'
import Child from './Child';
import Pure from './Pure';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Hello"
        }
        console.log("constructor");
    }

    // Run only one time before render function is called
    // UNSAFE_componentWillMount() {
    //     console.log("componentWillMount");
    // }

    // Run only one time after render function finish
    // Call Api, interact with DOM, setTimeout, setInterval
    // All activities relatives with side effect
    componentDidMount() {
        console.log("componentDidMount");
    }

    // Run after state or props was changed 
    // Run after render function
    // setState, call API, ...
    // Need stop conditional like: if, ...
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    // Run after state or props was changed but it run before render
    // it was abandoned in react 17 version
    // UNSAFE_componentWillUpdate() {
    //     console.log("componentWillUpdate");
    // }

    render() {
        console.log("render", this.state.name);
        return (
            <div>
                <h1 className="text-center">Life Cycle</h1>
                <button
                    className="btn btn-success"
                    onClick={() => this.setState({ name: 'Cybersoft' })}
                >
                    Click
                </button>
                <button
                    className="btn btn-danger ml-3"
                    onClick={() => this.forceUpdate()}
                >
                    Force Update
                </button>
                {
                    this.state.name !== "Cybersoft"
                    ? <Child name={this.state.name} />
                    : null
                }
                <Pure name="ABC" />
            </div>
        )
    }
}
