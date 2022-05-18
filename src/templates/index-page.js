import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { css } from '@emotion/css'
import { Spring } from 'react-spring/renderprops';
import SectionTitle from "../components/SectionTitle"
import Section from "../components/Section"
import SectionBreak from "../components/SectionBreak"
import TrustedAICard from "../components/TrustedAICard"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
//import Carousel from "../components/Carousel";
import Layout from "../components/Layout2"
import Image from "../components/Image"
import MainButton from "../components/MainButton"
import LightText from "../components/LightText"
import RobotRoll from "../components/robotroll"
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Customers from "../components/Customers"
import EndSection from "../components/EndSection"

const MiddleSquare = (props) => {
  return <div
    className={css`
      position: relative;
      flex-grow: 1;
      min-width: 470px;
      min-height: 400px;
      padding-top: 50%;
      background-image: ${props.imageUrl};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 0;
      
      @media (max-width: 970px) {
        width: 100%;
        min-width: 320px;
        text-align: center;
      }
  `}
  >
    {props.children}
  </div>
};

const InnerMiddleSquare = (props) => {
  return <div className="innerMiddleSquare">
    <SectionTitle parentsDecideAlignment noSpacing color="white" text={props.title} />
    <LightText resize color="white" text={props.text} />

    <MainButton to={props.to} text={<FormattedMessage
      id="readMore"
      defaultMessage="Läs mer"
    />} />
  </div>;
};

const StepPoint = (props) => {
  return <div className="step-point">
    <h3 style={{ fontSize: '1.5em', color: "var(--mediumGray)" }}>{props.title}</h3>
    <div style={{ height: '5px', width: '80px', background: 'var(--blue)', marginBottom: '20px', marginTop: '20px' }} />
    <p style={{ fontSize: '1.1em', color: "var(--lightGray)", color: '#737373' }}>{props.text}</p>
  </div>
}

const Arrow = (props) => {
  console.log(props.image.childImageSharp.gatsbyImageData.images.fallback.src)
  return <div className="transform-90-deg-on-mobile" style={{ width: '100px' }}><Zoom><img src={props.image.childImageSharp.gatsbyImageData.images.fallback.src} alt="arrow" /></Zoom></div>
}

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroBackground,
  brand,
  heroText,
  heroButtonText,
  videoUrl,
  videoSectionTitle,
  videoSectionText,
  videoSectionButtonText,
  customerSectionTitle,
  customerSection,
  sellingPoints,
  endSection

 /* logo,
  brand,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,*/
}) => {

  console.log(endSection)

  const heroBg = getImage(heroBackground) || heroBackground;
  const zimplyBrand = getImage(brand) || brand;

  const intl = useIntl();
  var currentLocale = intl.locale;

  return (
    <div>
      <Navbar />

      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => <div style={props}>
          <Hero2 
            heroBg={heroBg} 
            zimplyBrand={zimplyBrand}
            heroText={heroText}
            heroButtonText={heroButtonText}
         />
        </div>}
      </Spring>

      {/* BODY CONTENT */}
      <Section
        imageUrl={'/img/s1.png'}
        imageUrlMobile={'/img/white-section-mobile.png'}
        extraMargin="-60px"
      >
        <div className="left-right-content-wrapper">
          <div className="movie-container">
            <iframe
              src={currentLocale === "sv" ? videoUrl : "https://player.vimeo.com/video/598866568?h=ba0b099060"}
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>

          <div className="movie-side-text-container">
            <SectionTitle text={currentLocale === "sv" ? videoSectionTitle : "See how it works"} parentsDecideAlignment />
            <LightText
              resize color="#575757"
              text={currentLocale === "sv" ? videoSectionText : "Take back your time. Zimply’s digital assistants are here to help. Automate your daily, repetitive tasks with our digital assistants so you can focus on what really matters. We provide automation that will change your company for the better."} />

              <MainButton to="/demo" text={videoSectionButtonText} />

            {/*<MainButton to="/demo" text={<FormattedMessage
              id="demo08"
              defaultMessage="Boka demo"
            />} />*/}
          </div>
        </div>
      </Section>

      <Section background="#f8fcff">
      <SectionTitle text={sellingPoints.title} />
        {/*<SectionTitle text={<FormattedMessage
          id="home_points_title"
          defaultMessage="Kom igång"
        />} />*/}


        <div className="home-points-wrapper" >


            {sellingPoints.points.map((point, i) => (
              <React.Fragment>
                <Zoom>
                  <StepPoint
                    title={point.title}
                    text={point.text} 
                  />
                </Zoom>
                {i+1 === sellingPoints.points.length ? 
                  null
                  :
                  <Arrow image={sellingPoints.arrow}/>
                }
              </React.Fragment>
            
              )
            )}
            {/*<StepPoint
              title={<FormattedMessage
                id="home_points_01"
                defaultMessage="Förenkla ditt arbete"
              />}
              text={<FormattedMessage
                id="home_points_02"
                defaultMessage="Vill du fokusera din värdefulla tid på vettigare uppgifter? Vill ni öka kvaliteten? Zimply hjäper er att effektivisera ert arbete samtidigt som vi automatiserer processer ni inte vill göra manuellt."
              />} />
          </Slide>
          <Arrow />
          <Zoom>
            <StepPoint
              title={<FormattedMessage
                id="home_points_03"
                defaultMessage="Zimply gör vår magi"
              />}
              text={<FormattedMessage
                id="home_points_04"
                defaultMessage="Zimply utbildar er Digitala Assistent som automatiserer den valda arbetsuppgiften. Samtidigt som vi förbättrar och optimerar processen"
              />} />
          </Zoom>
          <Arrow />
          <Slide right>
            <StepPoint
              title={<FormattedMessage
                id="home_points_05"
                defaultMessage="Digitala Assistenten är live"
              />}
              text={<FormattedMessage
                id="home_points_06"
                defaultMessage="Nu kan du njuta av att jobba med uppgifter som du tycker om och som är bättre nytta för företaget"
              />} />*/}
        
        </div>
        <RobotRoll />
      </Section>


      <Section
        imageUrl={'/img/section2-bg.png'}
        imageUrlMobile={'/img/grey-section-mobile.png'}>
        <SectionTitle text={<FormattedMessage
          id="title2"
          defaultMessage="Urval av våra kunder"
        />} />
          
        <Customers customers={customerSection.customers} marginBottom />
        {/*<MainButton to="/case/svea" text={<FormattedMessage
          id="seeCustomers"
          defaultMessage="Se våra kunder"
        />} />*/}
      </Section>

      <section>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: 'auto',
        }}

          className={css`
        display: flex;
        flex-wrap: wrap;
        height: auto;
        margin-top: -100px;
        @media (max-width: 970px) {
          margin-top: -50px;
        }
    `}

        >
          <MiddleSquare imageUrl='url(/img/pink1.webp)'>
            <InnerMiddleSquare to="/about" title={<FormattedMessage
              id="about"
              defaultMessage="Om oss"
            />} text={<FormattedMessage
              id="home_text1"
              defaultMessage="Vi utbildar och hyr ut digitala assistenter som hjälper er att få bort monotona och repetitiva arbetsuppgifter"
            />} />
          </MiddleSquare>
          <MiddleSquare imageUrl='url(/img/office2.webp)' />
        </div>
      </section>

      <section>
        <div
          className={css`
        display: flex;
        flex-wrap: wrap;
        height: auto;

        @media (max-width: 970px) {
          display: none;
        }
    `}

        >
          <MiddleSquare imageUrl='url(/img/office1.webp)' />
          <MiddleSquare imageUrl='url(/img/pink2.webp)'>
            <InnerMiddleSquare to="/career" title={<FormattedMessage
              id="career"
              defaultMessage="Karriär"
            />} text={<FormattedMessage
              id="home_text2"
              defaultMessage="Är du redo att byta jobb? Vi planerar långsiktigt och ser över dina personliga mål, tillsammans planerar vi för en ljus framtid."
            />} />
          </MiddleSquare>
        </div>

        <div className={css`
        display: none;

        @media (max-width: 970px) {
          display: flex;
          flex-wrap: wrap;
          height: auto;
        }
    `}>
          <MiddleSquare imageUrl='url(/images/pink2.webp)'>
            <InnerMiddleSquare to="/career" title={<FormattedMessage
              id="career"
              defaultMessage="Karriär"
            />} text={<FormattedMessage
              id="home_text2"
              defaultMessage="Är du redo att byta jobb? Vi planerar långsiktigt och ser över dina personliga mål, tillsammans planerar vi för en ljus framtid."
            />} />
          </MiddleSquare>
          <MiddleSquare imageUrl='url(/images/office1.webp)' />
        </div>
      </section>

      <EndSection to="/contact" title={endSection.title} /*title={<FormattedMessage
        id="learnmore"
        defaultMessage="Vill du veta mer"
      />}*/
      icon={endSection.icon}
      buttonText={endSection.buttonText}
      iconUrl={endSection.icon.childImageSharp.gatsbyImageData.images.fallback.src}
      
      /*buttonText={<FormattedMessage
        id="contact"
        defaultMessage="Kontakta oss"
      />}*/ 
      />

    </div>
    /*<div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>*/
  );
};

IndexPageTemplate.propTypes = {
  heroBackground: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  brand: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroText: PropTypes.string,
  heroButtonText: PropTypes.string,
  videoUrl: PropTypes.string,
  videoSectionTitle: PropTypes.string,
  videoSectionText: PropTypes.string,
  buttonText: PropTypes.string,
  customerSectionTitle: PropTypes.string,
  customerSection: PropTypes.shape({
    customers: PropTypes.array,
    size: PropTypes.number,
    path: PropTypes.string
  }),
  sellingPoints: PropTypes.shape({
    title: PropTypes.string,
    arrow: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    points: PropTypes.array,
  }),
  endSection: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    buttonText: PropTypes.string,
  }),
 /* 
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),*/
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroBackground={frontmatter.hero.heroBackground}
        brand={frontmatter.hero.brand}
        heroText={frontmatter.hero.heroText}
        heroButtonText={frontmatter.hero.heroButtonText}
        videoUrl={frontmatter.videoSection.videoUrl}
        videoSectionTitle={frontmatter.videoSection.title}
        videoSectionText={frontmatter.videoSection.text}
        videoSectionButtonText={frontmatter.videoSection.buttonText}
        customerSectionTitle={frontmatter.customerSection.title}
        customerSection={frontmatter.customerSection}
        sellingPoints={frontmatter.sellingPoints}
        endSection={frontmatter.endSection}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          heroBackground {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          brand {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          heroText
          heroButtonText
        }
        videoSection {
          videoUrl
          title
          text
          buttonText
        }
        customerSection {
          title
          customers {
            logo {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            path
            size
          }
        }
        sellingPoints {
          title
          arrow {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          points {
            title
            text
          }
        }
        endSection {
          title
          icon {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          buttonText
        }
      }
    }
  }
`;
