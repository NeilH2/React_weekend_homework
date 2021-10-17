import React from 'react'
import CharacterListItem from './CharacterListItem'
import CharactersContainer from '../containers/CharactersContainer'

const CharactersList = ({characters}) => {

    const characterListNodes = characters.map((character, index) => {
        return <CharacterListItem key={index} character={character}/>
    })



    return (
        <div>
        <p>I am the character list</p>
        <ul>
            {characterListNodes}
        </ul>
        </div>
    )
}




export default CharactersList