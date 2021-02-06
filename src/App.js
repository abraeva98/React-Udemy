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
    pageTitle: "Super Star",
    showCars: false
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }
  
  changeShowCars = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  render() {
    const cars = this.state.cars;
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>



        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change Title</button>

        <button onClick={this.changeShowCars}>Show Cars</button>

        {this.state.showCars && 
              cars.map((car, index) => (
                <Car 
                    name={car.name} 
                    year={car.year}
                    key={index} 
                    onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                />
              ))
        }
      </div>
    );
  }
}

export default App;
