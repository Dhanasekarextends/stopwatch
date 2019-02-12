import React, { Component } from "react";

class ScreenTwo extends Component {

    render() {
        return(
            <div className="def">
                <div className="second-screen">
                    <div className="label2">
                        <div className="label2-item"> HH </div>
                        <div className="label2-item"> MM </div>
                        <div className="label2-item"> SS </div>
                        <div className="label2-item"> MS </div>
                    </div>
                    <div className="label2">
                        <div className="values2">{this.props.hrs}</div> : 
                        <div className="values2">{this.props.min}</div> : 
                        <div className="values2">{this.props.sec}</div> : 
                        <div className="values2">00</div>
                    </div>
                </div>
                <div className="button-div">
                    <div className="pause-button" onClick={this.props.changeRunningState}>Pause</div>
                    <div className="stop-button" onClick={this.props.changeScreen}>Stop</div>
                </div>
            </div>
        )
    }
}

export default ScreenTwo;