import React from 'react';
import CharacterDetail from './CharacterDetail';


const CharacterListItem = ({character, onCharacterClick}) => {

  const handleClick = function(){
    onCharacterClick(character);
  }




  return(

   <li onClick={handleClick}>{character.name}</li>
   )

}

export default CharacterListItem;

