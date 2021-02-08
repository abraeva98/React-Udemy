import React, { Component } from "react";
import "./car.css";
import Radium from "radium";

class Car extends Component {
  render() {
    const inputClasses = ["input"];

    if (this.props.name !== "") {
      inputClasses.push("green");
    } else {
      inputClasses.push("red");
    }

    if (this.props.name.length > 4) {
      inputClasses.push("bold");
    }

    return (
      <div className="Car">
        <h3>Car name: {this.props.name}</h3>
        <p>Year: {this.props.year}</p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}
export default Car;

// componentWillReceiveProps(nextProps) {
//     console.log('will recieve props', nextProps)
// }

// shouldComponentUpdate(nextProps, nextState) {
//     console.log('should update', nextProps, nextState)
//     return true;
// }

// componentWillUpdate(nextProps, nextState) {
//     console.log('will update', nextProps, nextState)
// }

// static getDerivedStateFromProps(nextProps, prevState) {
//     console.log('get derived state from props', nextProps, prevState)
//     return prevState;
// }

// componentDidUpdate() {
//     console.log('did update')
// }

// getSnapshotBeforeUpdate() {
//     console.log('snapshot') // it let us see the DOM before render
//     // ex: save scroll
// }

// componentWillUnmount() {
//     console.log('will unmount')
// }
