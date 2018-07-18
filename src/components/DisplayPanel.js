import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayPanel extends Component {
  render() {
    return (
      <div className="display_panel">
        {this.props.value}
      </div>
    );
  }
}

DisplayPanel.propTypes = {
  value: PropTypes.array.isRequired
};

export default DisplayPanel;