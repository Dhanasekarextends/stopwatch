import React, { Component } from "react";

class Keys extends Component {
    render() {
        return(
            <div className="keys">
                {this.props.value}
            </div>
        )
    }
}

export default Keys;