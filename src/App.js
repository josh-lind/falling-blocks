import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myBlockPos: 0,
      goodBlocks: [],
      badBlocks: []
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default App;
