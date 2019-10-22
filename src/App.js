import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {

    name: 'Estado'
  }

render () {
  return (
    <div className="App">

      <button>Change State</button>
      <br></br>
      <div>{this.state.name}</div>
      
    </div>
  );


}
}

export default App;
