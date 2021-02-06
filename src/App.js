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

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    })
  }

  changeShowCars = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler = (index) => {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({cars});
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    console.log('render')
    const cars = this.state.cars;
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeShowCars}>Show Cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
        {this.state.showCars && 
              cars.map((car, index) => (
                <Car 
                    name={car.name} 
                    year={car.year}
                    key={index} 
                    onChangeName={(event) => this.onChangeName(event.target.value, index)}
                    onDelete={this.deleteHandler.bind(this, index)}
                />
              ))
        }
        </div>
      </div>
    );
  }
}

export default App;
