import React, { Component } from "react";
import Key from "./keys";

class Keypad extends Component {
    render() {
        return(
            <div className="keys-part">
                <Key value={1}/>
                <Key value={2}/>
                <Key value={3}/>
                <Key value={4}/>
                <Key value={5}/>
                <Key value={6}/>
                <Key value={7}/>
                <Key value={8}/>
                <Key value={9}/>
                <Key value={"x"}/>
                <Key value={0}/>
            </div>
        )
    }
}

export default Keypad;