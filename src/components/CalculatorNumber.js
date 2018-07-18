import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CalculatorNumber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="number_button">
        {this.props.number}
      </button>
    );
  }
}

CalculatorNumber.propTypes = {
  number: PropTypes.number.isRequired
};

export default CalculatorNumber;