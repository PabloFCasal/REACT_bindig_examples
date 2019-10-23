import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    name: 'Estado original'
  }

changeStateName = (newStateName) => {
  
  this.setState({

      name: newStateName
  
  })
}


changeNameFromInput = (event) => {

  this.setState ({

    name: event.target.value
  })


}

render () {
  return (
    <div className="App">

      <button onClick={() => this.changeStateName('Un nuevo estado')}>Change State unsing Anon Function</button>
      <br></br>

      <button onClick={this.changeStateName.bind(this , 'Cambio con bind')} >Change state with .bind</button>
      <br></br>     

      <div>{this.state.name}</div>
      <input type='text' onChange={this.changeNameFromInput} value={this.state.name}></input>

    </div>
  );


}
}

export default App;
