import React, { Component } from "react";
import Key from "./keys";

class Keypad extends Component {
  render() {
    return (
      <div className="keys-part">
        <Key value={1} whenClicked={this.props.whenClicked} />
        <Key value={2} whenClicked={this.props.whenClicked} />
        <Key value={3} whenClicked={this.props.whenClicked} />
        <Key value={4} whenClicked={this.props.whenClicked} />
        <Key value={5} whenClicked={this.props.whenClicked} />
        <Key value={6} whenClicked={this.props.whenClicked} />
        <Key value={7} whenClicked={this.props.whenClicked} />
        <Key value={8} whenClicked={this.props.whenClicked} />
        <Key value={9} whenClicked={this.props.whenClicked} />
        <Key value={"x"} whenClicked={this.props.whenClicked} />
        <Key value={0} whenClicked={this.props.whenClicked} />
      </div>
    );
  }
}

export default Keypad;
