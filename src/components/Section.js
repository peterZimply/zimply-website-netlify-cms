import React from "react"
import { css } from '@emotion/css'

const Section = (props) => (
    <div
        className={`sectionBlock ${css`
                margin-top: ${props.extraMargin ? props.extraMargin : 0};
                background-image: url(${props.imageUrl});
                background-size: ${props.cover ? `cover` : `100% 100%`};
                background-color: ${props.background ? props.background : null};

                padding-top: ${props.smallPadding ? `60px` : null};
                padding-bottom: ${props.smallPadding ? `60px` : null};

                @media (max-width: 1000px) {
                    background-image: ${props.imageUrlMobile ? `url(${props.imageUrlMobile})` : null};
                }

                @media (max-width: 565px) {
                    padding: 60px 10px;

                    padding-top: ${props.smallPadding ? `60px` : null};
                    padding-bottom: ${props.smallPadding ? `60px` : null};

                    padding-top: ${props.bigPadding ? `100px` : null};
                    padding-bottom: ${props.bigPadding ? `100px` : null};
                    
                    margin-top: ${props.extraMarginMobile ? props.extraMarginMobile : null};
                }

            `}
        `}
    >
        {props.children}
    </div>
)

export default Section
