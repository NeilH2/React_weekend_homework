import React, { useEffect, useState } from 'react'
import CharactersList from '../components/CharactersList'
import CharacterListItem from '../components/CharacterListItem'
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'


const CharactersContainer = () => {


    const[allCharacters, setAllCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const fetchAllCharacters = function(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => setAllCharacters(data.results))
    }


    useEffect(() => {
        fetchAllCharacters();
    },[])

    const onCharacterSelected = function(character){
        setSelectedCharacter(character);
    }

    return(
        <div>
        <CharacterSelector characters={allCharacters} onCharacterSelected={onCharacterSelected} />
            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} /> : null}
        </div>
    );
}




export default CharactersContainer;