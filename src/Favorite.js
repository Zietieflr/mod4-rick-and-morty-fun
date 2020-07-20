import React from 'react'
import CharacterCard from './Character'

function Favorite(props) {
  console.log('favorite component')
  return (
    <div className='favorite-character'>
      <h2>Favorite</h2>
      <CharacterCard character={ props.character } getCharacter={props.getCharacter} />
    </div>
  )
}

export default Favorite