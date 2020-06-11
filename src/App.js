import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [isSwitchedOn, setIsSwitchedOn] = useState(false)
  const [menu, setMenu] = useState([])


  // setIsSwitchedOn([false])
  // setMenu([])

  const handleLightToggle = () => {
    setIsSwitchedOn(!isSwitchedOn)
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => {
        const names = response.results.map(pokemon => pokemon.name)
        setMenu(names)
      })
})

    const pokemon = menu.map(pokemon => {
      return <li key={pokemon}>{pokemon}</li>
    })

    return (
      <div className="App">
        <p>The light is { isSwitchedOn ? "on" : "off" }</p>
        <button onClick={handleLightToggle}>Toggle Light</button>
        <ul> {pokemon} </ul>
      </div>
    );
}
