import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CalculatorNumber extends Component {
  state = {
    buttonNumber: this.props.number
  }

  handleClick = () => {
    this.props.onNumberClick(this.props.number);
  }

  render() {
    return (
      <button 
        className="number_button"
        onClick={this.handleClick}
      >
        {this.props.number}
      </button>
    );
  }
}

CalculatorNumber.propTypes = {
  number: PropTypes.number.isRequired,
  onNumberClick: PropTypes.func.isRequired
  
};

export default CalculatorNumber;