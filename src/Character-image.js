import React from 'react'
import styled from 'styled-components'

const CharacterImageStyled = styled.div `
`

function CharacterImage({image}) {
    return (
        <CharacterImageStyled>
            {image}
        </CharacterImageStyled>
    )
}

export default CharacterImage
