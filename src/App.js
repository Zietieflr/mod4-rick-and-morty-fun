import React, { Component } from 'react';
import './App.css';
import Favorite from './Favorite'
import Characters from './Characters'

const charactersURL = 'https://rickandmortyapi.com/api/character'

class App extends Component {
  
  state = {
    characters: [],
    favoriteCharacters: []
  }

  componentDidMount() {
    fetch(charactersURL)
      .then(response => response.json())
      .then(({ results }) => this.setState({characters: results}))
  }

  getCharacter = (newFave) => {
    const isNotNewFavorite = this.state.favoriteCharacters.find(character => {
      return character.id === newFave.id
    })
    return isNotNewFavorite ? null : this.setFavoritesState(newFave)
  }

  setFavoritesState = (character) => {
    this.setState({
      favoriteCharacters: [
        ...this.state.favoriteCharacters, 
        character
    ]}) 
  }

  removedFavorite = (unfaveCharacter) => {
    const newFaves = this.state.favoriteCharacters.filter(character => {
      return character.id !== unfaveCharacter.id
    })
    this.setState({favoriteCharacters: newFaves})
  }
  
  render() {
    const { characters, favoriteCharacters } = this.state

    return (
      <div className="App">
        <h1>Rick and Morty!</h1>
        <Favorite characters={favoriteCharacters} clickHandler={this.removedFavorite} />
        <Characters 
          characters={characters} 
          clickHandler={this.getCharacter} 
        /> 
      </div>
    );
  }
}

export default App;
