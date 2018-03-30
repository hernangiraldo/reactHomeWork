import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    animals: [
      { name: 'Dog' },
      { name: 'Cat' }
    ]
  }

  changeAnimalNameHandler = () => {
    this.setState({
      animals: [
        { name: 'Lion' },
        { name: 'Elephant' }
      ]
    })
  }

  restartAnimalNameHandler = () => {
    this.setState({
      animals: [
        { name: 'Dog' },
        { name: 'Cat' }
      ]
    })
  }

  customAnimalNameHandler = (event) => {
    this.setState({
      animals: [
        { name: event.target.value },
        { name: 'Cat' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={ this.customAnimalNameHandler } />
        <button onClick={ this.changeAnimalNameHandler } >Change animals</button>
        <button onClick={ this.restartAnimalNameHandler } >Restart animals</button>
        <UserOutput animal={ this.state.animals[0].name } />
        <UserOutput animal={ this.state.animals[1].name } />
      </div>
    );
  }
}

export default App;
