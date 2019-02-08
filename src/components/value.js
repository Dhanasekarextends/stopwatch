import React, { Component } from "react"

class Value extends Component {
    render() {
        return(
            <div className="values-part">
                <div className="label">
                    <div className="label-child">HH</div>
                    <div className="label-child">MM</div>
                    <div className="label-child">SS</div>
                </div>
                <div className="values">
                    <div className="value-div">
                        <input type="number" maxLength="2" pattern="[0-9]{2}"></input>
                    </div> : 
                    <div className="value-div">
                        <input type="number"></input>
                    </div> : 
                    <div className="value-div">
                        <input type="number"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Value;