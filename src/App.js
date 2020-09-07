import React, {useEffect, useState} from 'react';
import './App.css';
//import Character from './Character'
import CharacterName from './Character-name'
import CharacterImage from './Character-image'
import CharacterDescription from './Character-description'
import CharacterPlaceHolder from './Character-placeholder'
import Layout from './Layout'
import Next from './Next'
import API from './Api'

const api = new API()

function App() {
  const [character, setCharacter] = useState({})
    useEffect(() => {
        async function getCharacter() {
            setCharacter(await api.getCharacter(1))
            //const character =
            //console.log(character)
        }
        getCharacter()
    }, [])
  return (
    <>
      {/*<Character />*/}
      <CharacterPlaceHolder name={character.name}/>
      <Layout
        next={<Next />}
        name={<CharacterName name={character.name} />}
        image={<CharacterImage image={character.image} name={character.name} />}
        description={<CharacterDescription gender={character.gender} species={character.species} status={character.status}/>}
      />
    </>
  );
}

export default App;
