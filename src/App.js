import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {

    name: 'Estado'
  }

changeStateName = () => {
  
  this.setState({

      name: 'New State'
    

  })
}

render () {
  return (
    <div className="App">

      <button onClick={this.changeStateName}>Change State</button>
      <br></br>
      <div>{this.state.name}</div>

    </div>
  );


}
}

export default App;
