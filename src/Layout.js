import React from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.div `
`

function Layout({ name, image, description }) {
    return (
        <LayoutStyled>
            <div className="grid">
    <span className="asset top">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="line"></span>
    </span>
    <img className="logo" src="./static/images/logo@2x.png" width="280" alt="" />
    <div className="social">
      <a href="https://instagram.com/LeonidasEsteban">
        <img src="./static/images/instagram.svg" alt="" />
      </a>
      <a href="https://facebook.com/LeonidasEsteban">
        <img src="./static/images/facebook.svg" alt="" />
      </a>
      <a href="https://twitter.com/LeonidasEsteban">
        <img src="./static/images/twitter.svg" alt="" />
      </a>
    </div>
    <div className="navigation name">
      <a href="#">Name</a>
    </div>
    {name}
    {image}
    {/*<Name /> */}
    {/*<CharacterName name={character.name} />*/}
    {/*<CharacterImage image={character.image} name={Character.name} />*/}


    <div className="navigation about">
      <a href="#">About</a>
    </div>
        {description}
    {/*<CharacterDescription gender={character.gender} species={character.species} status={character.status}/>*/}
   
    <span className="asset bottom">
      <span className="line"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </span>

    <div></div>
    <div className="learn-more">
      <span>learn more</span>
    </div>

    <div className="arrow" id="load-next"></div>

  </div>
        </LayoutStyled>
    )
}

export default Layout
