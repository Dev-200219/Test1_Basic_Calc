import './App.css';
import React from 'react';
import Symbols from './Symbols';
import Input from './Input';
import Keypad from './Keypad';

class App extends React.Component {

  state = {
    currValue: "",
    arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  }

  addSymbol = (symbol) => {
    let currEqn = this.state.currValue;
    this.setState({ currValue: currEqn + symbol })
  }

  updateEqn = (newVal) => {
    this.setState({ currValue: newVal })
  }

  getResult = () => {
    let eqn = this.state.currValue;
    let val = eval(eqn);
    this.setState({ currValue: val })
  }


  render = () => {

    return (
      <div className="App">

        <Input currValue={this.state.currValue} updateEqn={this.updateEqn} getResult={this.getResult} />

        <Symbols addSymbol={this.addSymbol} />

        <Keypad updateEqn={this.updateEqn} keypadArr={this.state.arr} addSymbol={this.addSymbol} getResult={this.getResult} />

      </div>
    );
  }
}

export default App;
