import React, { Component } from 'react';
import DisplayPanel from './DisplayPanel';
import CalculatorNumber from './CalculatorNumber';

class CalculatorBody extends Component {
  render() {
    return (
      <div className="calculator_body">
        <div className="calculator_inner_body">
          <DisplayPanel />
          <div className="button_placement">
            <div className="button_row">
              <CalculatorNumber number={1} />
              <CalculatorNumber number={2} />
              <CalculatorNumber number={3} />
            </div>
            <div className="button_row">
              <CalculatorNumber number={4} />
              <CalculatorNumber number={5} />
              <CalculatorNumber number={6} />
            </div>
            <div className="button_row">
              <CalculatorNumber number={7} />
              <CalculatorNumber number={8} />
              <CalculatorNumber number={9} />
            </div>
            <div className="button_row">
              <CalculatorNumber number={0} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorBody;
