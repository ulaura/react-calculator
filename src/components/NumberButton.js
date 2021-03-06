import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberButton extends Component {
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

NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  onNumberClick: PropTypes.func.isRequired
  
};

export default NumberButton;