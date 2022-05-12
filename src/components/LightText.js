import React from "react"
import { css } from '@emotion/css'
import Fade from 'react-reveal/Fade';

const LightText = (props) => (
    <Fade bottom duration={1000} delay={400} distance="30px">
        <h3
            className={css`
            width: 100%;
            font-size: ${props.fontSize ? props.fontSize : `1.3em`};
            text-align: ${props.center ? `center` : `left`};
            font-weight: ${props.bold ? `bold` : `lighter`};
            margin-bottom: ${props.bottom ? `${props.bottom}px` : `20px`};
            line-height: 1.6;
            color: ${props.color ? props.color : `var(--darkGray)`};
            font-style: ${props.italic ? `italic` : null};

            @media (max-width: 565px) {
                font-size: ${props.resize ? `19px` : null};
                font-weight: ${props.resize ? `lighter` : null};
            }
        `}>
            <span style={{ fontWeight: 'bold' }}>{props.boldText}</span>{props.text}{props.link}
        </h3>
    </Fade>
)

export default LightText
