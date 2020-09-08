import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import CharacterName from './Character-name'
import CharacterImage from './Character-image'
import CharacterDescription from './Character-description'
import CharacterPlaceHolder from './Character-placeholder'
import Layout from './Layout'
import Next from './Next'
import api from './Api'
import CharacterContext from './Character-context'



const CharacterStyled = styled.div `

`

function Character({ match }) {
    const [character, setCharacter] = useState({})
    useEffect(() => {
        async function getCharacter() {
            setCharacter(await api.getCharacter(match.params.id || 1))
        }
        getCharacter()
    }, [match.params.id])
  return (
    <CharacterStyled>
        <CharacterContext.Provider value={{
        character,
        setCharacter
    }}>
        <CharacterPlaceHolder name={character.name}/>
            <Layout
                next={<Next />}
                name={<CharacterName name={character.name} />}
                image={<CharacterImage image={character.image} name={character.name} />}
                description={<CharacterDescription gender={character.gender} species={character.species} status={character.status}/>}
            />
        </CharacterContext.Provider>
    </CharacterStyled>
  );
}

export default Character
