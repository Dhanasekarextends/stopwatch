import React, { Component } from "react";
import Value from "./components/value";
import Keypad from "./components/keypad";
import Start from "./components/start";
import ScreenTwo from "./components/screentwo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: true,
      running: true,
      hrs: "00",
      min: "00",
      sec: "00",
    };
  }

  onKeyPressed = value => {
    let hrs = parseInt(this.state.hrs);
    let min = parseInt(this.state.min)
    let sec = parseInt(this.state.sec);
    if(this.hrs===true){
      hrs = parseInt(this.state.hrs.toString() + value.toString());
      console.log(hrs)
    }
    if(this.min===true){
      min = parseInt(this.state.min.toString() + value.toString());
      console.log(min)
    }
    if(this.sec===true){
      sec = parseInt(this.state.sec.toString() + value.toString());
      console.log(sec)
    }
    if(min<=59) {
      if(sec<=59){
        this.setState({
          hrs: hrs,
          min: min,
          sec: sec
        })
      }
    }
  };

  focus=(who)=>{
    switch(who){
        case "hrs" : 
        this.hrs=true;this.min=false;this.sec=false;break;
        case "min" : this.min=true;this.hrs=false;this.sec=false;break;
        case "sec" : this.hrs=false;this.min=false;this.sec=true;break;
        default : 
    }
    console.log(who)
  }

  changeState = () => {
    this.setState({
      screen: !this.state.screen
    });
    console.log("state Changed");
  };

  changeRunningState =()=> {
    this.setState({
        state: !this.state.running
    })
    console.log("running state")
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          {this.state.screen ? (
            <div className="def">
              <Value hrs={this.state.hrs} min={this.state.min} sec={this.state.sec}
               focus={(who)=>this.focus(who)}/>
              <Keypad whenClicked={value => this.onKeyPressed(value)} />
              <Start changeScreen={() => this.changeState()} />
            </div>
          ) : (
            <ScreenTwo changeScreen={() => this.changeState()}
             changeRunningState={() => this.changeRunningState()}
             hrs={this.state.hrs} min={this.state.min} sec={this.state.sec} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
