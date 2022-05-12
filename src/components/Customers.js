import React from "react"
import { css } from '@emotion/css'
import Fade from 'react-reveal/Fade';
import { navigate } from "gatsby-plugin-intl";


const Customer = (props) => {
    return <div style={{ margin: '20px 10px', height: props.height ? props.height : '50px', width: props.width ? props.width : 'auto' }}>
        <img src={props.imageUrl} alt="customer" style={{
            height: '100%',
            opacity: props.noOpacity ? 1 : 0.8
        }} />
    </div>
};

const Customer2 = (props) => {
    return <div
        className="customer-box"
        style={{ transform: props.small ? 'scale(0.8)' : null }}
        onClick={() => navigate(props.link)}
    >
        <img src={props.imageUrl} alt="customer" style={{
            height: props.height,
            opacity: props.noOpacity ? 1 : 0.8
        }} />
    </div>
};

const Customers = (props) => (
    <div className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80%;
            max-width: 1200px;
            margin-bottom: ${props.marginBottom ? `50px` : `auto`};

            @media (max-width: 970px) {
                width: auto;   
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
            }
        `}

    >
        <Fade top duration={2000} delay={800} distance="30px">

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                <Customer2 height="20%" imageUrl="/images/customers/svea.png" link="/case/svea" small={props.small} />
                <Customer2 height="25%" imageUrl="/images/customers/dina2.png" link="/case/dina" small={props.small}/>
                <Customer2 height="30%" imageUrl="/images/customers/zimply_sbb_logo.webp" link="/case/sbb" small={props.small}/>
                {/* <Customer height="27px" imageUrl="/images/customers/futurpension.png" noOpacity /> */}
                <Customer2 height="10%" imageUrl="/images/customers/acne.svg" link="/case/acne" small={props.small}/>
                <Customer2 height="22%" imageUrl="/images/customers/wise.png" link="/case/wise" small={props.small}/>
                <Customer2 height="12%" imageUrl="/images/customers/futur2.png" link="/case/futurpension" small={props.small}/>
                <Customer2 height="23%" imageUrl="/images/customers/froda.png" link="/" small={props.small}/>
                <Customer2 height="34%" imageUrl="/images/customers/kronleins.png" link="/" small={props.small}/>
            </div>
        </Fade>

    </div>
)

export default Customers
