import React from 'react'
import styled from 'styled-components'

const CharacterNameStyled = styled.div `
    display: flex;
    align-items: center;
    grid-area: character-name;
`

function CharacterName({ name }) {
    return (
        <CharacterNameStyled>
            <div class="character-name">
                <h2>{name}</h2>
            </div>
        </CharacterNameStyled>
    )
}

export default CharacterName
