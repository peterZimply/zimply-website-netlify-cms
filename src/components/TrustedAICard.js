import React from "react"
import { css } from '@emotion/css'
import Fade from 'react-reveal/Fade';

const TrustedAICard = () => (
    <Fade bottom duration={1000} delay={200} distance="30px">
        <div
            className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 700px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 23px 8px;

                @media (max-width: 970px) {
                    width: 450px;
                    margin: 20px;
                    flex-direction: column;
                }
                @media (max-width: 520px) {
                    width: auto;
                }
            `}>
            <img width="200px" src="/images/emblem.webp" alt="emblem" />
            <div style={{padding: '20px'}}>
            <p style={{ color: '#939393' }}>“One of the chosen startups evaluated by a committee composed of representatives from investors, large companies, academia, startups, authorities and incubators.“<span><a target="_blank" href="https://www.ai-startups.se/">Swedish AI Startup Landscape</a></span></p>
            </div>
            
        </div>
    </Fade>
)

export default TrustedAICard