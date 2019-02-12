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
                        <input type="number" onFocus={()=>this.props.focus("hrs")} value={this.props.hrs}></input>
                    </div> : 
                    <div className="value-div" >
                        <input type="number" onFocus={()=>this.props.focus("min")} value={this.props.min}/>
                    </div> : 
                    <div className="value-div" >
                        <input type="number" onFocus={()=>this.props.focus("sec")} value={this.props.sec}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Value;