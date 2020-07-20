import React, { Component } from 'react';
import './App.css';
import Favorite from './Favorite'
import Characters from './Characters'

const charactersURL = 'https://rickandmortyapi.com/api/character'

class App extends Component {
  
  state = {
    characters: [],
    favoriteCharacter: {}
  }

  componentDidMount() {
    fetch(charactersURL)
      .then(response => response.json())
      .then(({ results }) => this.setState({characters: results}))
  }

  getCharacter = (character) => {
    this.setState({favoriteCharacter: character})
  }
  
  render() {
    const { characters, favoriteCharacter } = this.state

    return (
      <div className="App">
        <h1>Rick and Morty!</h1>
        <Favorite character={favoriteCharacter} getCharacter={this.getCharacter} />
        <Characters 
          characters={characters} 
          getCharacter={this.getCharacter} 
        /> 
      </div>
    );
  }
}

export default App;
