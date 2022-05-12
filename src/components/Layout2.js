/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React, { useEffect } from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import "../styles/layout.css"
 import Footer from "../components/Footer"
 
 import 'modern-normalize/modern-normalize.css'
 import '../globalStyles.css'
 import '../styles/keyframes.css'
 //import CookieBot from "react-cookiebot"
 import CookieConsent, { Cookies } from "react-cookie-consent";
 
 const domainGroupId = '4c885699-61a0-4853-a70b-b0171f195b02';
 
 const Layout = ({ children }) => {

    // demo page changes body background, this resets the body to white when the page is changed from
    useEffect(() => {
      document.body.style.background = "#fff";
    }, []);
  
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    return (
      <>
        <CookieConsent
          location="bottom"
          buttonText="Jag godkänner"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: "rgb(221 230 234)", color: 'var(--darkGrey)', boxShadow: 'rgb(61 61 61 / 61%) 0px 2px 10px' }}
          buttonStyle={{ color: "#fff", background: "#5dbada", borderRadius: '5px', padding: '10px 15px' }}
        >
          Vi använder cookies för att ge dig en bättre upplevelse av Zimply.
        </CookieConsent>
  
  
        {/*typeof window !== 'undefined' && <CookieBot domainGroupId={domainGroupId} />*/}
        {/* <CookieBot domainGroupId={domainGroupId} /> */}
        {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
        {/*<Navbar />*/}
        <main>{children}</main>
        <Footer />
      </>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout
  