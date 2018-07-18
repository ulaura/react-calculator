import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayPanel from './DisplayPanel';
import CalculatorNumber from './CalculatorNumber';

class CalculatorBody extends Component {
  state = {
    // Don't initialize state as an array.
    // If you do, a leading zero will always be present. 
    currentValue: 0
  }

  handleNumberClick = (number) => {
    this.setState({currentValue: [...this.state.currentValue, number]});
  }

  render() {
    console.log(this.state.currentValue);
    return (
      <div className="calculator_body">
        <div className="calculator_inner_body">
          <DisplayPanel value={this.state.currentValue} />
          <div className="button_placement">
            <div className="button_row">
              <CalculatorNumber number={1} onNumberClick={this.handleNumberClick} />
              <CalculatorNumber number={2} onNumberClick={this.handleNumberClick} />
              <CalculatorNumber number={3} onNumberClick={this.handleNumberClick} />
            </div>
            <div className="button_row">
              <CalculatorNumber number={4} onNumberClick={this.handleNumberClick} />
              <CalculatorNumber number={5} onNumberClick={this.handleNumberClick} />
              <CalculatorNumber number={6} onNumberClick={this.handleNumberClick} />
            </div>
            <div className="button_row">
              <CalculatorNumber number={7} onNumberClick={this.handleNumberClick} />
              <CalculatorNumber number={8} onNumberClick={this.handleNumberClick} />
              <CalculatorNumber number={9} onNumberClick={this.handleNumberClick} />
            </div>
            <div className="button_row">
              <CalculatorNumber number={0} onNumberClick={this.handleNumberClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CalculatorBody.propTypes = {
  number: PropTypes.number.isRequired
};

export default CalculatorBody;
