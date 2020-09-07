import React from 'react'
import styled from 'styled-components'

const NextStyled = styled.div`
    cursor: pointer;
        /* border: 1px solid red; */
        background-image: url('/images/arrow.svg');
        background-repeat: no-repeat;
        background-position: left  bottom;
`

function Next() {
    return (
        <NextStyled>
            Next
        </NextStyled>
    )
}

export default Next
