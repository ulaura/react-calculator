import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClearButton extends Component {
  // the callback to send data back to parent state
  handleClick = () => {
    this.props.onClearClick();
  }

  render() {
    return (
      <button 
        className="number_button clear_button"
        onClick={this.handleClick}
      >
        Clear
      </button>
    );
  }
}

ClearButton.propTypes = {
  onClearClick: PropTypes.func.isRequired
};

export default ClearButton;