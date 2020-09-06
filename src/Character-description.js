import React from 'react'
import styled from 'styled-components'

const CharacterDescriptionStyled = styled.div `
    grid-area: character-description;
`

function CharacterDescription({gender, species, status}) {
    return (
        <CharacterDescriptionStyled>
            <div class="character-labels">
                <h3 class="character-label">Género: {gender}</h3>
                <h3 class="character-label">Especie: {species} </h3>
                <h3 class="character-label">Status: {status}</h3>
            </div>
        </CharacterDescriptionStyled>
    )
}

export default CharacterDescription
