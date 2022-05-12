import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import '../styles/navbarNew.css'
import { IntlContextConsumer, Link, changeLocale, FormattedMessage } from "gatsby-plugin-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react'
import Fade from 'react-reveal/Fade';

const allowScroll = () => {
    document.body.style.height = "auto";
    document.body.style.overflow = "auto"
}

const blockScroll = () => {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden"
}

const NavLink = (props) => {
    return (
        <Link
            id={props.contactNav ? "contact-button-nav" : null}
            onClick={() => allowScroll()}
            className={`nav-link ${props.dark ? 'dark-mode' : ''}`}
            to={props.path}
        >
            {props.title}
        </Link>
    )
}

const DropdownNavLink = (props) => {
    return (
        <div
            className={`nav-link ${props.dark ? 'dark-mode' : ''}`}
        >
            {props.title}
            <FontAwesomeIcon className={`dropdown-arrow ${props.dark ? 'dark-mode' : ''}`} color="white" icon={faAngleDown} />


            <div className="dropdown-wrapper">
                <div className="dropdown">
                    <ul>
                        {props.links.map((link, i) => {
                            return <li key={i} onClick={() => allowScroll()}><Link className="dropdown-link" to={link.path}>{link.title}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const assignSubLinks = (click, setLinks) => {
    click();
    setLinks();
}

const MobileDropdownNavLink = (props) => {
    return (
        <div
            className="nav-link"
            onClick={() => assignSubLinks(props.click, props.setLinks)}
        >
            {props.title}
            <FontAwesomeIcon className="mobile-dropdown-arrow" color="white" icon={faAngleDown} />
        </div>
    )
}

const Navbar = (props) => {

    const [isOpen, setOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuLinks, setSubMenuLinks] = useState(null);
    const [opacity, setOpacity] = useState(1);
    const [showBackground, setShowBackground] = useState(false);
    const [scrollDir, setScrollDir] = useState("scrolling down");

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }

            const scrollY = window.pageYOffset;

            if (scrollDir === "scrolling up") {
                if (scrollY > 520) {
                    setShowBackground(true);
                }
                else {
                    setShowBackground(false);
                }
                setOpacity(1);
            }
            else if (scrollY > 0 && scrollY < maxScroll) {
                setOpacity(0);
            }
            else {
                setOpacity(1);
            }
        };

        const onResize = () => {
            if (isOpen && window.innerWidth >= 1400) {
                allowScroll();
                setOpen(false);
                setSubMenuOpen(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);

        return function cleanupListener() {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener('resize', onResize)
        }
        //return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir, isOpen]);

    return (
        <React.Fragment>
            {isOpen ?
                <Fade duration={500} delay={0}>
                    <div style={{
                        position: 'fixed',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        background: 'var(--darkGrey)',
                        zIndex: 3,
                    }}>

                        {subMenuOpen ?
                            <React.Fragment>

                                <FontAwesomeIcon onClick={() => console.log(setSubMenuOpen(false))} size="2x" style={{ marginTop: '-40px' }} color="white" icon={faArrowLeft} />
                                <br />
                                <br />
                                {subMenuLinks && subMenuLinks.map((link, i) => {
                                    return <NavLink title={link.title} path={link.path} />
                                })}

                            </React.Fragment>
                            :
                            <React.Fragment>

                                <NavLink title={<FormattedMessage
                                    id="nav1"
                                    defaultMessage="Digitala assistenter"
                                />}
                                    path="/digitalassistants" />
                                <MobileDropdownNavLink
                                    click={() => setSubMenuOpen(true)}
                                    title={<FormattedMessage
                                        id="nav2"
                                        defaultMessage="Om oss"
                                    />}

                                    setLinks={() => setSubMenuLinks([{
                                        title: <FormattedMessage
                                            id="nav2"
                                            defaultMessage="Om oss"
                                        />,
                                        path: "/about"
                                    },
                                    {
                                        title: <FormattedMessage
                                            id="nav7"
                                            defaultMessage="Vårt team"
                                        />, path: "/team"
                                    }])}
                                />
                                <MobileDropdownNavLink
                                    click={() => setSubMenuOpen(true)}
                                    title={<FormattedMessage
                                        id="nav3"
                                        defaultMessage="Case"
                                    />}
                                    setLinks={() => setSubMenuLinks([{ title: "Svea", path: "/case/svea" }, { title: "Acne Studios", path: "/case/acne" }, { title: "Futur Pension", path: "/case/futurpension" }])}
                                />

                                <MobileDropdownNavLink
                                    click={() => setSubMenuOpen(true)}
                                    title={<FormattedMessage
                                        id="nav4"
                                        defaultMessage="Intelligent automation"
                                    />}
                                    setLinks={() => setSubMenuLinks([{
                                        title: <FormattedMessage
                                            id="nav9"
                                            defaultMessage="Överblick"
                                        />, path: "/automation"
                                    }, { title: "RPA", path: "/rpa" }, { title: "Chatbot", path: "/chatbot" }, { title: "Machine learning", path: "/machinelearning" }, {
                                        title: <FormattedMessage
                                            id="ia_title13"
                                            defaultMessage="Samtalsanalys"
                                        />, path: "/conversationalintelligence"
                                    },
                                    {
                                        title: <FormattedMessage
                                            id="ia_title14"
                                            defaultMessage="NLP"
                                        />, path: "/nlp"
                                    },
                                    {
                                        title: <FormattedMessage
                                            id="ia_title15"
                                            defaultMessage="OCR"
                                        />, path: "/ocr"
                                    },
                                    {
                                        title: <FormattedMessage
                                            id="ia_title16"
                                            defaultMessage="Computer Vision"
                                        />, path: "/computervision"
                                    }
                                    ])}
                                />

                                <NavLink title={<FormattedMessage
                                    id="nav5"
                                    defaultMessage="Jobba här"
                                />} path="/career" />
                                <NavLink contactNav={true} title={<FormattedMessage
                                    id="nav6"
                                    defaultMessage="Kontakt"
                                />} path="/contact" />

                                <IntlContextConsumer>
                                    {({ languages, language: currentLocale }) =>
                                        languages.map(language => {
                                            if (language !== currentLocale) {
                                                return (
                                                    <button
                                                        key={language}
                                                        className="language-button"
                                                        onClick={() => changeLocale(language)}
                                                    >
                                                        {language === "de" || language === "sv" ?
                                                            "SV"
                                                            :
                                                            "EN"
                                                        }
                                                    </button>
                                                )
                                            }
                                        })
                                    }
                                </IntlContextConsumer>

                            </React.Fragment>
                        }

                    </div></Fade> : null
            }

            <nav style={{
                opacity: `${opacity}`,
                position: 'fixed',
                background: `${showBackground ? props.darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' : 'rgba(0,0,0,0)'}`,
                height: 80,
                width: '100vw',
                zIndex: 3,
                top: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bottom: '-5rem',  // for a sliding effect
                transition: 'opacity .3s ease, background .5s ease'
            }}

                className="navbar appear-animation">


                <div className="left-nav-container">
                    <div style={{ width: '90px' }}>
                        <Link
                            style={{ zIndex: '1', display: 'flex' }}
                            to="/"
                        >
                            <img style={{ marginRight: '20px' }} height={40} src={isOpen ? "/images/logos/zimply-logo-color.svg" : props.darkMode ? "/images/logos/zimply-logo-color.svg" : "/images/logos/zimply-logo-color.svg"} alt="zimply" />
                            <img height={40} src={isOpen ? "/images/logos/zimply-text-white.svg" : props.darkMode ? "/images/logos/zimply-text-black.svg" : "/images/logos/zimply-text-white.svg"} alt="zimply" />
                        </Link>
                    </div>
                </div>

                <div className="middle-nav-container">
                    <NavLink dark={props.darkMode} title={<FormattedMessage
                        id="nav1"
                        defaultMessage="Digitala assistenter"
                    />} path="/digitalassistants" />
                    <DropdownNavLink dark={props.darkMode} title={<FormattedMessage
                        id="nav2"
                        defaultMessage="Om oss"
                    />} links={[{
                        title: <FormattedMessage
                            id="nav2"
                            defaultMessage="Om oss"
                        />, path: "/about"
                    }, {
                        title: <FormattedMessage
                            id="nav7"
                            defaultMessage="Vårt team"
                        />, path: "/team"
                    }]} />
                    <DropdownNavLink dark={props.darkMode} title={<FormattedMessage
                        id="nav3"
                        defaultMessage="Case"
                    />} links={[{ title: "Svea", path: "/case/svea" }, { title: "Acne Studios", path: "/case/acne" }, { title: "Futur Pension", path: "/case/futurpension" }]} />

                    <DropdownNavLink dark={props.darkMode} title={<FormattedMessage
                        id="nav4"
                        defaultMessage="Intelligent automation"
                    />} links={[{
                        title: <FormattedMessage
                            id="nav9"
                            defaultMessage="Överblick"
                        />, path: "/automation"
                    }, { title: "RPA", path: "/rpa" }, { title: "Chatbot", path: "/chatbot" }, { title: "Machine learning", path: "/machinelearning" }, {
                        title: <FormattedMessage
                            id="ia_title13"
                            defaultMessage="Samtalsanalys"
                        />, path: "/conversationalintelligence"
                    },
                    {
                        title: <FormattedMessage
                            id="ia_title14"
                            defaultMessage="NLP"
                        />, path: "/nlp"
                    },
                    {
                        title: <FormattedMessage
                            id="ia_title15"
                            defaultMessage="OCR"
                        />, path: "/ocr"
                    },
                    {
                        title: <FormattedMessage
                            id="ia_title16"
                            defaultMessage="Computer Vision"
                        />, path: "/computervision"
                    }
                    ]} />


                    <NavLink dark={props.darkMode} title={<FormattedMessage
                        id="nav5"
                        defaultMessage="Jobba här"
                    />} path="/career" />
                    <NavLink contactNav={true} dark={props.darkMode} title={<FormattedMessage
                        id="nav6"
                        defaultMessage="Kontakt"
                    />} path="/contact" />
                </div>

                <div className="right-nav-container">
                    <IntlContextConsumer>
                        {({ languages, language: currentLocale }) =>
                            languages.map(language => {
                                if (language !== currentLocale) {
                                    return (
                                        <button
                                            key={language}
                                            className={`language-button ${props.darkMode ? 'dark-mode' : ''}`}
                                            onClick={() => changeLocale(language)}
                                        >
                                            {language === "de" || language === "sv" ?
                                                "SV"
                                                :
                                                "EN"
                                            }
                                        </button>
                                    )
                                }
                            })
                        }
                    </IntlContextConsumer>

                    {props.hideDemo ?
                        null :
                        <Link
                            id="book-demo-button-nav"
                            className={`demo-nav-button ${props.darkMode ? 'dark-mode-demo-button' : ''}`}
                            to="/demo"
                        >
                            <FormattedMessage
                                id="nav8"
                                defaultMessage="Boka demo"
                            />
                        </Link>
                    }

                </div>

                <div className="hamburger">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color={isOpen ? "white" : props.darkMode ? "black" : "white"}
                        size={28}
                        onToggle={toggled => {
                            if (toggled) {
                                blockScroll();
                            } else {
                                allowScroll();
                                setSubMenuOpen(false);
                            }
                        }}
                    />
                </div>

            </nav>
        </React.Fragment>

    )
}


export default Navbar

/*

export default function BlogRoll() {
    return (
      <StaticQuery
        query={graphql`
          query BlogRollQuery {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
              edges {
                node {
                  excerpt(pruneLength: 400)
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    templateKey
                    date(formatString: "MMMM DD, YYYY")
                    featuredpost
                    featuredimage {
                      childImageSharp {
                        gatsbyImageData(
                          width: 120
                          quality: 100
                          layout: CONSTRAINED
                        )
  
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <BlogRollTemplate data={data} count={count} />}
      />
    );
  }

  */