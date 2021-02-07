import React, {Component} from 'react';
import Auxiliary from '../hoc/Auxiliary'

export default class Counter extends Component {
    state = {
        counter: 0
    }

    // handle async actions, if state is changing at the same time w dif func
    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )
    }
}