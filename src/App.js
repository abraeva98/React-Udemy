import './App.css';
import Car from './Car/Car';
import React, { Component } from 'react';

class App extends Component {
  state = {
    cars: [
      {name: "Ford", year: 2018},
      {name: "Audi", year: 2011},
      {name: "Mazda", year: 2012},
    ],
    pageTitle: "Super Star"
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }
  
  render() {
    const cars = this.state.cars;
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <input type='text' onChange={this.handleInput}/>

        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change Title</button>

        <Car cars={cars[0].name}
            onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car cars={cars[1].name}
            onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car cars={cars[2].name}
            onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        />
      </div>
    );
  }
}

export default App;
