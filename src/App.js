import "./App.css";
import Car from "./Car/Car";
import React, { Component } from "react";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2011 },
      { name: "Mazda", year: 2012 },
    ],
    pageTitle: "Super Star",
    showCars: false,
    clicked: false,
  };

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars,
    });
  };

  changeShowCars = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  deleteHandler = (index) => {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  };

  // componentWillMount() {
  //   console.log('will mount')
  // }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("render");
    const cars = this.state.cars;
    return (
      <div className="App">

        <ClickedContext.Provider value={this.state.clicked}>
            <Counter />
        </ClickedContext.Provider>

        <h1>{this.state.pageTitle}</h1>

        <button style={{ marginTop: "20px" }} onClick={this.changeShowCars}>
          Show Cars
        </button>

        <button onClick={() => this.setState({ clicked: true })}>
          Change Clicked
        </button>

        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          {this.state.showCars &&
            cars.map((car, index) => (
              <Car
                name={car.name}
                year={car.year}
                key={index}
                index={index}
                onChangeName={(event) =>
                  this.onChangeName(event.target.value, index)
                }
                onDelete={this.deleteHandler.bind(this, index)}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
