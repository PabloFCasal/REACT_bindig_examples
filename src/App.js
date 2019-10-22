import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {

    name: 'Estado'
  }

changeStateName = (newStateName) => {
  
  this.setState({

      name: newStateName
    

  })
}

render () {
  return (
    <div className="App">

      <button onClick={() => this.changeStateName('Un nuevo estado')}>Change State</button>
      <br></br>
      <div>{this.state.name}</div>

    </div>
  );


}
}

export default App;
