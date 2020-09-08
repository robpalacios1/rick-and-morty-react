import React from 'react'
import styled from 'styled-components'

const SocialStyled = styled.div`
    @media screen and (max-width: 1024px) {
        a   {
            text-decoration: none;
        }
        a   {
            margin-left: 2em;
        }
        a:first-child {
            margin-left: 0;
        }
    }
`
function Social() {
    return (
        <SocialStyled>
            <a href="https://instagram.com/michuyblacky" rel="noopener noreferrer" target="_blank" >
                <img src="./images/instagram.svg" alt="" />
            </a>
            <a href="https://facebook.com/roberto.palacios.397" rel="noopener noreferrer" target="_blank">
                <img src="./images/facebook.svg" alt="" />
            </a>
            <a href="https://twitter.com/robpalacios11" rel="noopener noreferrer" target="_blank">
                <img src="./images/twitter.svg" alt="" />
            </a>
        </SocialStyled>
    )
}

export default Social






