import React from 'react'
import styled from 'styled-components'

const SocialStyled = styled.div`

`
function Social() {
    return (
        <SocialStyled>
            <a href="https://instagram.com/michuyblacky" target="_blank" alt="">
                <img src="./images/instagram.svg" alt="" />
            </a>
            <a href="https://facebook.com/roberto.palacios.397" target="_blank" alt="">
                <img src="./images/facebook.svg" alt="" />
            </a>
            <a href="https://twitter.com/robpalacios11" target="_blank" alt="">
                <img src="./images/twitter.svg" alt="" />
            </a>
        </SocialStyled>
    )
}

export default Social






