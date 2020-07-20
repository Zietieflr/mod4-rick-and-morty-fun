import React from 'react'
import CharacterCard from './Character'

function Characters({ characters, clickHandler }) {

  const displayCharacters = () => {
    return characters.map(character => {
    return (
      <CharacterCard 
        key={character.id} 
        character={character} 
        clickHandler={clickHandler} 
      />
    )
  })}

  return (
    <section className='characters'>
      { displayCharacters() }
    </section>
  )
}

export default Characters; 