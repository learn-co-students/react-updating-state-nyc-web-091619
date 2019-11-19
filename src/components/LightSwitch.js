import React, { Component } from 'react'

export default class LightSwitch extends Component {

    state = {
        toggled: false
    }


    onClickHandler = () => {
        this.setState(
            (previousState) => {
                return { toggled: !previousState.toggled }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>
                    {this.state.toggled ? "ON" : "OFF"}
                </button>
            </div>
        )
    }
}