// Code ClickityClick Component Here
import React from 'react';
 
export default class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false,
      count: 0
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled,
          count: previousState.count + 1
        }
    }, () => console.log(this.state.toggled))
    console.log(this.state.toggled)
  };
 
  render() {
    return (
      <div>
        <p>I am {this.state.toggled ? "ON" : "OFF"}!</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}