import React, { Component, PureComponent } from 'react'

// PureComponent will auto handle LifeCycle 'shouldComponentUpdate'
// PC will only compare all primitive value (string, number, boolean)
// PC can't check Object cuz it compare memory address
export default class Pure extends PureComponent {
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
