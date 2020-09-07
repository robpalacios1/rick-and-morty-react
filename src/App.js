import React, { useEffect, useState } from 'react';
import './App.css';
import './Nprogress.css';
//import Character from './Character'
import CharacterName from './Character-name'
import CharacterImage from './Character-image'
import CharacterDescription from './Character-description'
import CharacterPlaceHolder from './Character-placeholder'
import Layout from './Layout'
import Next from './Next'
import api from './Api'
import CharacterContext from './Character-context'


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
    <CharacterContext.Provider value={{
      character,
      setCharacter
    }}>
      {/*<Character />*/}
      <CharacterPlaceHolder name={character.name}/>
      <Layout
        next={<Next />}
        name={<CharacterName name={character.name} />}
        image={<CharacterImage image={character.image} name={character.name} />}
        description={<CharacterDescription gender={character.gender} species={character.species} status={character.status}/>}
      />
    </CharacterContext.Provider>
  );
}

export default App;
