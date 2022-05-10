import React from 'react'
import { css } from '@emotion/css'
import { Link } from 'gatsby'
import { FormattedMessage } from "gatsby-plugin-intl";

const Title = (props) => {
  return <h2 style={{ color: 'var(--blue)', marginBottom: '30px', fontSize: '1.5em' }}>{props.text}</h2>
}

const Text = (props) => {
  return <h2 style={{ color: 'var(--white)', fontWeight: 'lighter', fontSize: '1.5em' }}>{props.text}</h2>
}

const ColumnWrapper = (props) => {
  return <div

    className={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        @media (max-width: 570px) {
          align-items: center;
        }
    `}>
    {props.children}
  </div>
}

export default () => (
  <footer style={{
    padding: '8rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    background: `var(--secondary)`,
    fontSize: '1.2rem',
    color: `var(--white)`,
    height: 'auto',
    zIndex: 2
  }}>
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 800px;   
        @media (max-width: 570px) {
          width: auto;   
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
    `}
    >
      <ColumnWrapper>
        <Title text="ZIMPLY INNOVATION" />
        <Text text="Stockholm" />
        <Text text="Linnégatan 87 A" />
        <Text text="115 23 Stockholm" />
        <br />
        <Text text="Göteborg" />
        <Text text="Jons väg 21" />
        <Text text="433 75 Jonsered" />
      </ColumnWrapper>

      <ColumnWrapper>
        <Title text={<FormattedMessage
          id="footer01"
          defaultMessage="KONTAKT"
        />} />
        <Text text="Zimply Innovation" />
        <Text text="08 122 09 339" />
        <a href="mailto:hello@zimply.ai"><Text text="hello@zimply.ai" /></a>
      </ColumnWrapper>

      <ColumnWrapper>
        <Title text={<FormattedMessage
          id="footer02"
          defaultMessage="SOCIALT"
        />} />
        <div>
          <a href="https://www.facebook.com/zimplyinnovation" target="_blank"><img src="/images/social/FB.png" alt="customer" width="16px" style={{ marginRight: '15px' }} /></a>
          <a href="https://www.linkedin.com/company/zimply-innovation/" target="_blank"><img src="/images/social/linkdin.png" alt="customer" width="30px" style={{ marginRight: '15px' }} /></a>
          <a href="https://www.instagram.com/zimplyinnovation/" target="_blank"><img src="/images/social/instagram.png" alt="customer" width="28px" style={{ marginRight: '15px' }} /></a>
        </div>
      </ColumnWrapper>

      <ColumnWrapper>
        <Link to="/">
          <img
            src="/images/logos/zimply-logo-text-white.svg"
            alt="logo"
            width="100"
          />
        </Link>
      </ColumnWrapper>
    </div>
  </footer>
)
