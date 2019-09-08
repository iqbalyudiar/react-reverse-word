import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputText: "",
      inputNumber: 0,
      inputNumberSorting: 0,
      resultText: "",
      resultNumber: "",
      resultSorting: ""
    };

    // this.state = {
    //   a: "",
    //   result: ""
    // };

    /*
    this.handleInput = this.handleInput.bind(this);
    if we used handleInput(e) then it must be bind if use arrow function it doesnt need to be binded
    */
  }

  handleInput = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //   handleInput(e) {
  //     this.setState({
  //       inputText: e.target.value
  //     });
  //   }

  // handleInput = e => {
  //   this.setState({
  //     inputText: e.target.value,
  //     inputNumber: e.target.value
  //   });
  // };

  reverseWord = () => {
    let { inputText } = this.state;
    let reverse = inputText
      .split("")
      .reverse()
      .join("");
    this.setState({ resultText: reverse });
  };
  reverseNumber = () => {
    let { inputNumber } = this.state;
    let reverse = parseInt(
      inputNumber
        .split("")
        .reverse()
        .join("")
    );
    this.setState({ resultNumber: reverse });
  };
  sorting = () => {
    let { inputNumberSorting } = this.state;
    let sort = parseInt(
      inputNumberSorting
        .split("")
        .sort()
        .join("")
    );
    this.setState({ resultSorting: sort });
  };

  render() {
    console.log(this.state.inputText);
    console.log(this.state.inputNumber);

    let { resultText, resultNumber, resultSorting } = this.state;

    return (
      <div>
        <input type="text" name="inputText" onChange={this.handleInput} />
        <p>Click Button to Reverse the Word</p>
        <button onClick={this.reverseWord}>Reverse</button>
        <p>{resultText}</p>

        <input type="number" name="inputNumber" onChange={this.handleInput} />
        <p>Click Button to Reverse the Number</p>
        <button onClick={this.reverseNumber}>Reverse</button>
        <p>{resultNumber}</p>

        <input
          type="text"
          name="inputNumberSorting"
          onChange={this.handleInput}
        />
        <p>Click to Sort the Number</p>
        <button onClick={this.sorting}>Sort</button>
        <p>{resultSorting}</p>
      </div>
    );
  }
}

export default App;
