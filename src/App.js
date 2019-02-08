import React, { Component } from 'react';
import Value from "./components/value"
import Keypad from "./components/keypad"
import Start from "./components/start"
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    state = ({
      screen: true,
      hrs: 0,
      min: 0,
      sec: 0
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
         <Value />
         <Keypad />
         <Start />
        </div>
      </div>
    );
  }
}

export default App;
