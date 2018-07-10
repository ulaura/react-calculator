import React, { Component } from 'react';
import DisplayPanel from './DisplayPanel';

class CalculatorBody extends Component {
  render() {
    return (
      <div className="calculator_body">
        <DisplayPanel />
      </div>
    );
  }
}

export default CalculatorBody;
