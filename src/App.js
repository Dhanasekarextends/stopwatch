import React, { Component } from 'react';
import Value from "./components/value";
import Keypad from "./components/keypad";
import Start from "./components/start";
import ScreenTwo from "./components/screentwo";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      screen: true,
      hrs: 0,
      min: 0,
      sec: 0
    }
  }

  changeState=()=> {
    this.setState({
      screen: !this.state.screen
    })
    console.log("state Changed")
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          {this.state.screen ? <div className="def"><Value /><Keypad /><Start changeScreen={()=>this.changeState()}/></div> : <ScreenTwo changeScreen={()=>this.changeState()}/>}
        </div>
      </div>
    );
  }
}

export default App;
