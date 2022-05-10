import React from "react"
//import { css, cx } from '@emotion/css'
//import { Link } from "gatsby"
import { Link } from "gatsby-plugin-intl";
const MainButton = (props) => (

  <Link
    to={props.to}
    state={props.data ? props.data : null}
    role="button"
    {...props}
  >
    <button id={props.tag ? props.tag : null} className={props.tag ? "mainButton" + " " + props.tag : "mainButton"} onClick={props.onClick}>
      {props.text}
    </button>
  </Link>
)

export default MainButton
