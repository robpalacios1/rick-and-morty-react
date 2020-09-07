import React from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.div `
    .grid-name-area {
        display: flex;
        align-items: center;
        grid-area: character-name;
    }

    .grid-description-area {
        grid-area: character-description
    }

    .grid-image-area {
        grid-area: avatar;
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .grid-next-area {
        grid-area: arrow;
        
    }

    @media screen and (max-width: 1024px) {
        .character-name-area {
            margin-top: 1em;
            justify-content: center;
        }
    }
`

function Layout({ name, image, description, next }) {
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
    <div className="grid-name-area">
        {name}
    </div>
    <div className="grid-image-area">
        {image}
    </div>


    <div className="navigation about">
      <a href="#">About</a>
    </div>
    <div className="grid-description-area">
        {description}
    </div>

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
    <div className="grid-next-area">
        {next}
    </div>
  </div>
        </LayoutStyled>
    )
}

export default Layout
