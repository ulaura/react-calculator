import React, { Component } from 'react';

class DisplayPanel extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  render() {
    return (
      <div className="display_panel">
        {this.state.value}
      </div>
    );
  }
}

export default DisplayPanel;