import React from "react"
//import { css } from '@emotion/css'
import Fade from 'react-reveal/Fade';

const SectionTitle = (props) => (

  <Fade bottom duration={1000} delay={200} distance="30px">


    <h1 onClick={props.onClick}
      /*className={css`
        width: 100%;
        font-size: 5rem;
        font-weight: 600;
        color: ${props.color ? props.color : `var(--darkGrey)`};
        margin-bottom: ${props.noSpacing ? null : `1.5em`};
        text-align: ${props.parentsDecideAlignment ? null : props.alignLeft ? `left` : `center`};
        @media (max-width: 565px) {
          font-family: Avenir;
          font-size: 3rem;
        }
      `}*/
      className={`sectionTitle 
      ${props.color ? 'whiteText' : ''} 
      ${props.noSpacing ? '' : 'textBottomMargin'}
      ${props.parentsDecideAlignment ? '' : props.alignLeft ? 'alignLeft' : 'alignCenter'}
      `}
    >
      {props.text}
    </h1>
  </Fade>
)

export default SectionTitle
