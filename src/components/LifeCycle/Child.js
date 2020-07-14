import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props) {
        super(props);
    }

    // Run after state or props was changed, run before render
    // if return true it means that render child is allow to run
    // if return false it means that render child is not allow to run
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.name === "Cybersoft") {
            return true;
        }
        return false;
    }

    // Run when only props was changed and run before 'shouldComponentUpdate'
    // setState after receive new props
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps);
    }

    // It alters for 'componentWillReceiveProps'
    // Run after props change and before 'shouldComponentUpdate'
    // Change state when props was changed
    // rarely use
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.name === "Cybersoft") {
            return {
                currentName: nextProps.name
            }
        }
    }

    componentDidUpdate() {
        console.log("Child: componentDidUpdate");
    }

    // Run before component is canceled
    // clearTimeout, clearInterval, removeAddEventListener
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("Child render");
        return (
            <div className="mt-3">
                {this.props.name}
            </div>
        )
    }
}
