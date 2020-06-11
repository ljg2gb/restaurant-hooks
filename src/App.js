import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isSwitchedOn: false,
    menu: [],
  }

  handleLightToggle = () => {
    this.setState({ isSwitchedOn: !this.state.isSwitchedOn });
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(response => {
        const names = response.results.map(pokemon => pokemon.name)
        this.setState({ menu: names })
      })
  }

  render(){
    const pokemon = this.state.menu.map(pokemon => {
      return <li key={pokemon}>{pokemon}</li>
    })
    return (
      <div className="App">
        <p>The light is { this.state.isSwitchedOn ? "on" : "off" }</p>
        <button onClick={this.handleLightToggle}>Toggle Light</button>
        <ul> {pokemon} </ul>
      </div>
    );
  }
}

export default App;
