import React from 'react';
import CharactersContainer from '../containers/CharactersContainer';

const CharacterDetail = ({selectedCharacter}) => {
  return (
      
      <div>
          <h3>{selectedCharacter.name}</h3>
          <h3>{selectedCharacter.species}</h3>
          <img src={selectedCharacter.image}></img>
          <h3>{selectedCharacter.status}</h3>
         
      </div>
  )
}

export default CharacterDetail;