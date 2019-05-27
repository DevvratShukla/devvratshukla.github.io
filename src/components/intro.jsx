import React, { Component } from 'react';

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="alert alert-secondary" role="alert">
        <span className="font-weight-bold">{this.props.text}</span>
      </div>
    );
  }
}

export default Intro;
