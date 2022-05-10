import { assistantBlocks } from "../../public/data/data";
import { assistantBlocks_en } from "../../public/data/data_en";
import React from "react";
import { css } from '@emotion/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import AssistantItem from '../components/AssistantItem';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Fade from 'react-reveal/Fade';
import { useIntl } from "gatsby-plugin-intl";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const renderPrevButton = ({ isDisabled }) => {
    return <span className={css`
        position: absolute;
        left: -50px;
        top: 40%;
        opacity: ${isDisabled ? 0.5 : 1};
        @media (max-width: 1000px) {
            left: 0;
        }
    `}><FontAwesomeIcon size="3x" color={`var(--darkGrey)`} icon={faAngleLeft} /></span>;
};

const renderNextButton = ({ isDisabled }) => {
    return <span
        className={css`
        position: absolute;
        right: -50px;
        top: 40%;
        opacity: ${isDisabled ? 0.5 : 1};
        @media (max-width: 1000px) {
            right: 0;
        }
    `}
    ><FontAwesomeIcon size="3x" color={`var(--darkGrey)`} icon={faAngleRight} /></span>;
};

const Carousel = () => {

    const intl = useIntl();
    var currentLocale = intl.locale;

    const items = [
        <div data-value="1"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[0].assistants[0] : assistantBlocks_en[0].assistants[0]} /></div>,
        <div data-value="2"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[0].assistants[1] : assistantBlocks_en[0].assistants[1]} /></div>,
        <div data-value="3"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[1].assistants[0] : assistantBlocks_en[1].assistants[0]} /></div>,
        <div data-value="4"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[1].assistants[1] : assistantBlocks_en[1].assistants[1]} /></div>,
        <div data-value="5"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[2].assistants[0] : assistantBlocks_en[2].assistants[0]} /></div>,
        <div data-value="6"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[2].assistants[1] : assistantBlocks_en[2].assistants[1]} /></div>,
        <div data-value="7"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[3].assistants[0] : assistantBlocks_en[3].assistants[0]} /></div>,
        <div data-value="8"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[4].assistants[0] : assistantBlocks_en[4].assistants[0]} /></div>,
        <div data-value="9"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[4].assistants[1] : assistantBlocks_en[4].assistants[1]} /></div>,
        <div data-value="10"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[5].assistants[0] : assistantBlocks_en[5].assistants[0]} /></div>,
        <div data-value="11"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[6].assistants[0] : assistantBlocks_en[6].assistants[0]} /></div>,
        <div data-value="12"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[7].assistants[0] : assistantBlocks_en[7].assistants[0]} /></div>,
        <div data-value="13"><AssistantItem data={currentLocale === "sv" ? assistantBlocks[7].assistants[1] : assistantBlocks_en[7].assistants[1]} /></div>,
    ];

    return <div className={css`
        width: 920px;

        @media (max-width: 1000px) {
            width: 620px;
        }

        @media (max-width: 650px) {
            width: 330px;
        }
    `}>
        <Fade bottom duration={1000} delay={400} distance="100px">
            <AliceCarousel
                autoPlay
                //autoPlayControls
                autoPlayStrategy="none"
                autoPlayInterval={2300}
                animationDuration={500}
                mouseTracking
                items={items}
                responsive={responsive}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />
        </Fade>

    </div>
};
export default Carousel;