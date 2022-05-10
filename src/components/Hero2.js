import React from 'react'
import { css } from '@emotion/css'
import ReactTextRotator from "react-text-rotator";
import MainButton from "./MainButton"
import Fade from 'react-reveal/Fade';
import { FormattedMessage } from "gatsby-plugin-intl";
//import ParticlesBlack from "../particles/particlesBlack"
//import ParticlesWhite2 from '../particles/ParticlesWhite2';
//import ParticleBubbles from '../particles/ParticleBubbles';

const content = [
    {
        text: "Human",
        animation: "fade"
    },
    {
        text: "Automation",
        animation: "fade"
    },
    {
        text: "More Time",
        animation: "fade"
    },
    {
        text: "Your Way",
        animation: "fade"
    },
    {
        text: "More Fun",
        animation: "fade"
    }
];

export default () => (
    <div
        className="hero-wrapper"
    >
        <div style={{ position: 'absolute', width: '100%' }}>
            {/*<ParticlesWhite2 style={{ width: '100vw', height: '100%' }} />*/}
            {/*<ParticleBubbles style={{width: '100vw', height: '100%'}}/>*/}
        </div>

        <div className="inner-hero-content">
            <div className={css`
                    width: 420px;
                    display: flex;
                    justify-content: start;
                    align-items: center;

                    @media (max-width: 565px) {
                        flex-direction: column;
                        width: auto;
                    }
                `}

            >
                <Fade bottom duration={2000} delay={200} distance="30px">
                    <img
                        src="/images/logos/zimply-text-white.svg"
                        alt="logo"
                        width="160"

                    />
                </Fade>

                <h1
                    className={css`
                        font-size: 6rem;
                        margin-bottom: 1.45rem;
                        color: var(--blue);
                        margin-left: 20px;
                        white-space: nowrap;
                        
                        @media (max-width: 565px) {
                            margin-left: auto;
                            font-size: 5rem;
                            font-family: Avenir;
                        }
                `}>
                    <ReactTextRotator content={content} transitionTime={500} startDelay={400} />
                </h1>
            </div>

            <Fade bottom duration={2000} delay={800} distance="30px">
                <h1
                    className={css`
                font-size: 3rem;
                line-height: 1.6;
                font-weight: lighter;
                margin-bottom: 40px;

                @media (max-width: 565px) {
                    
                    font-size: 2rem;
                }
            `}>
                    <FormattedMessage
                        id="heroText"
                        defaultMessage="Låt våra digitala assistenter hjälpa er när ni inte hinner med!"
                    /></h1>
            </Fade>
            <MainButton to="/digitalassistants" text={<FormattedMessage
                id="ourassistants"
                defaultMessage="Våra assistenter"
            />} />
        </div>

    </div>
)