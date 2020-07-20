import React from 'react'
import CharacterCard from './Character'

function Characters({ characters, getCharacter }) {

  const displayCharacters = () => {
    return characters.map(character => {
    return (
      <CharacterCard 
        key={character.id} 
        character={character} 
        getCharacter={getCharacter} 
      />)
  })}

  return (
    <section className='characters'>
      { displayCharacters() }
    </section>
  )
}

export default Characters; 