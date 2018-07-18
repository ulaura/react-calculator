import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayPanel from './DisplayPanel';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';

class CalculatorBody extends Component {
  state = {
    // Don't initialize state as an array.
    // If you do, a leading zero will always be present. 
    currentValue: 0
  }

  handleNumberClick = (number) => {
    this.setState({currentValue: [...this.state.currentValue, number]});
  }

  handleClearClick = () => {
    this.setState({currentValue: 0});
  }

  render() {
    console.log(this.state.currentValue);
    return (
      <div className="calculator_body">
        <div className="calculator_inner_body">
          <DisplayPanel value={this.state.currentValue} />
          <div className="button_placement">
            <div className="button_row">
              <NumberButton number={1} onNumberClick={this.handleNumberClick} />
              <NumberButton number={2} onNumberClick={this.handleNumberClick} />
              <NumberButton number={3} onNumberClick={this.handleNumberClick} />
            </div>
            <div className="button_row">
              <NumberButton number={4} onNumberClick={this.handleNumberClick} />
              <NumberButton number={5} onNumberClick={this.handleNumberClick} />
              <NumberButton number={6} onNumberClick={this.handleNumberClick} />
            </div>
            <div className="button_row">
              <NumberButton number={7} onNumberClick={this.handleNumberClick} />
              <NumberButton number={8} onNumberClick={this.handleNumberClick} />
              <NumberButton number={9} onNumberClick={this.handleNumberClick} />
            </div>
            <div className="button_row">
              <NumberButton number={0} onNumberClick={this.handleNumberClick} />
              <ClearButton onClearClick={this.handleClearClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CalculatorBody.propTypes = {
  number: PropTypes.number
};



export default CalculatorBody;
