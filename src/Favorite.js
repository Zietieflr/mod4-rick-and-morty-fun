import React from 'react'
import CharacterCard from './Character'

function Favorite({ characters, clickHandler }) {
  
  const favorites = (favoritedCharacters, clickFunction) => {
    return favoritedCharacters.map(favoritedCharacter => {
      return renderFavorite(favoritedCharacter, clickFunction)
    })
  }

  const renderFavorite = (favoritedCharacter, clickFunction) => {
    return (
      <CharacterCard 
        key={favoritedCharacter.id}
        character={favoritedCharacter} 
        clickHandler={clickFunction} 
    />)
  }

  return (
    <div className='favorite-character'>
      <h2>Favorites</h2>
      {characters.length ? favorites(characters, clickHandler) : null}
    </div>
  )
}

export default Favorite