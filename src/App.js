import React, { Component } from "react";
import Value from "./components/value";
import Keypad from "./components/keypad";
import Start from "./components/start";
import ScreenTwo from "./components/screentwo";
import "./App.css";

class App extends Component {

  min=true;
  constructor(props) {
    super(props);
    this.state = {
      screen: true,
      running: false,
      hrs: "00",
      min: "00",
      sec: "00",
      ms: "00",
      pause: "Pause"
    };
  }

  onKeyPressed = value => {
    let hrs = this.state.hrs;
    let min = this.state.min;
    let sec = this.state.sec;
    if (this.hrs === true) {
      hrs = (this.state.hrs.toString() + value.toString());
      hrs=hrs.slice(-2);
      console.log(hrs);
      if(value=="x")hrs="00";
    }
    if (this.min === true) {
      min = (this.state.min.toString() + value.toString());
      min=min.slice(-2);
      console.log(min);
      if(value=="x")min="00";
    }
    if (this.sec === true) {
      sec = (this.state.sec.toString() + value.toString());
      sec=sec.slice(-2);
      console.log(sec);
      if(value=="x")sec="00";
    }
    if (min <= 59) {
      if (sec <= 59) {
        this.setState({
          hrs: hrs,
          min: min,
          sec: sec
        });
      }
    }
  };

  focus = who => {
    switch (who) {
      case "hrs":
        this.hrs = true;
        this.min = false;
        this.sec = false;
        break;
      case "min":
        this.min = true;
        this.hrs = false;
        this.sec = false;
        break;
      case "sec":
        this.hrs = false;
        this.min = false;
        this.sec = true;
        break;
      default:
    }
    console.log(who);
  };

  changeState = () => {
    this.setState({
      screen: !this.state.screen
    });
    if(this.state.screen){
      this.startTimer();
      console.log("timer started")
    } else {
      this.stopTimer();    
      this.setState({
        hrs: "00",
        min: "00",
        sec: "00",
        ms: "00"
      });
      console.log("timer stopped")
    }
    console.log(this.state.screen);
  };

  changeRunningState = () => {
    let pause = this.state.pause;
    this.setState({
      running: !this.state.running
    });
    if(this.state.running){
      this.startTimer();
      console.log("timer started")
      pause = "Pause";
      } else {
        this.stopTimer();
        console.log("timer stopped")
        pause = "Start";
      }
    this.setState({
      pause: pause
    })
  };

  startTimer=()=>{
    if(this.state.hrs!=0 || this.state.min!=0 || this.state.sec!=0){
      this.timerVar=setInterval(this.timer, 10);
      console.log("check timer")
    } else {
      this.setState({
        screen: true
      })
    }
  }

  timer=()=>{
    let hrs = this.state.hrs;
    let min = this.state.min;
    let sec = this.state.sec;
    let ms = this.state.ms;
    ms--;
    if(ms<0){
      ms=100;
      sec--;
      if(sec<0){  
        min--;
        sec=59;
        if(min<0){
          hrs--;
          min=59;
        }
      }
    }
    if(hrs==0 && min==0 && sec==0){
      this.stopTimer();
      console.log("timer stopped")
    }
    this.setState({
      hrs: ("0" + hrs).slice(-2),
      min: ("0" + min).slice(-2),
      sec: ("0" + sec).slice(-2),
      ms: ms
    });
  }

  stopTimer=()=>{
    clearInterval(this.timerVar);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          {this.state.screen ? (
            <div className="def">
              <Value
                hrs={this.state.hrs}
                min={this.state.min}
                sec={this.state.sec}
                focus={who => this.focus(who)}
              />
              <Keypad whenClicked={value => this.onKeyPressed(value)} />
              <Start changeScreen={() => this.changeState()}/>
            </div>
          ) : (
            <ScreenTwo
              changeScreen={() => this.changeState()}
              changeRunningState={() => this.changeRunningState()}
              hrs={this.state.hrs}
              min={this.state.min}
              sec={this.state.sec}
              ms={this.state.ms}
              text={this.state.pause}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
