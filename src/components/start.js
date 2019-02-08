import React, { Component } from "react";

class Start extends Component {
    render() {
        return(
            <div className="start-part" onClick={this.props.changeScreen}>START</div>
        )
    }
}

export default Start;