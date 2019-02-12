import React, { Component } from "react";

class Keys extends Component {
  render() {
    return (
      <div
        className="keys"
        onClick={() => this.props.whenClicked(this.props.value)}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Keys;
