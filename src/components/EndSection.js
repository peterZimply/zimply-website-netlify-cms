import React from "react"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import MainButton from "../components/MainButton"
import Container from "../components/Container"
import Zoom from 'react-reveal/Zoom';

const EndSection = (props) => (
    <Section
        imageUrl={'/images/section3-bg.png'}
        imageUrlMobile={'/images/mobile-sections/white-section-mobile-end2.png'}
        extraMargin="-50px"
        extraMarginMobile="-18px"
        bigPadding
    >
        <Container>
            <SectionTitle text={props.title} />
            <Zoom>
                <img
                    src={props.iconUrl ? props.iconUrl : "/images/icons/bulb.svg"}
                    alt="bulb"
                    style={{
                        position: 'absolute',
                        width: '160px',
                        zIndex: -1
                    }}
                />
            </Zoom>
            <MainButton id="contact-button" to={props.to} text={props.buttonText} tag="contact-button" />
        </Container>
    </Section>
)

export default EndSection