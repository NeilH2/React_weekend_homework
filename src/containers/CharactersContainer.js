import React, { useEffect, useState } from 'react'
import CharactersList from '../components/CharactersList'
import CharacterListItem from '../components/CharacterListItem'


const CharactersContainer = () => {


    const[allCharacters, setAllCharacters] = useState([])

    const fetchAllCharacters = function(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => setAllCharacters(data.results))
    }


    useEffect(() => {
        fetchAllCharacters();
    },[])

    return(
        <>
        <p>I am the Characters Container</p>
        <CharactersList characters={allCharacters}/>
        </>
    );
}




export default CharactersContainer;