import React from 'react'
import styled from 'styled-components'

const CharacterImageStyled = styled.div `
    grid-area: avatar;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

function CharacterImage({image, name}) {
    return (
        <CharacterImageStyled>
            <img class="character-image" src={image} alt={name}></img>
        </CharacterImageStyled>
    )
}

export default CharacterImage
