import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import Logo from "../assets/images/logo.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ sectionTitle, slug }) => {
  const [active, setActive] = useState(false);
  const headerRef = useRef(),
    toggleRef = useRef();

  const onToggle = () => setActive((prevState) => !prevState);

  return (
    <>
      <div className="page_header_wrapper ds affix-top-wrapper" style={{ height: "90px" }}>
        <header className={`page_header ds affix ${active ? "mobile-active" : ""}`} ref={headerRef}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-11">
                <Link to="/" className="logo text-center">
                  <img src={Logo} alt="Ikigai Marketer" />
                </Link>
              </div>
              <div className="col-xl-8 col-lg-6 col-1 text-sm-center">
                <nav className="top-nav">
                  <ul className="nav sf-menu sf-js-enabled sf-arrows">
                    <li>
                      <AniLink paintDrip duration={1} hex="#A62557" to="/" activeClassName="active">
                        <span>Inicio</span>
                      </AniLink>
                    </li>
                    <li>
                      <Link to="/acerca" activeClassName="active">
                        <span>Más de nosotros</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicios" activeClassName="active">
                        <span>Servicios</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/portafolio" activeClassName="active">
                        <span>Portafolio</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" activeClassName="active">
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <AniLink paintDrip duration={1} hex="#A62557" to="/contacto" activeClassName="active">
                        <span>Contacto</span>
                      </AniLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-2 col-lg-3 text-lg-left text-xl-right d-none d-lg-block">
                <div className="header_phone">
                  <a
                    href="https://wa.me/51917685797?text=Estoy%20interesado%20en%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>+51 </span>917 685 797
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span
            className={`toggle_menu ${active ? "mobile-active" : ""}`}
            ref={toggleRef}
            onClick={onToggle}
            onKeyDown={onToggle}
            role="button"
            tabIndex={0}
          >
            <span />
          </span>
        </header>
      </div>

      <section className="page_title ls s-py-50 corner-title ls invise overflow-visible">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>{sectionTitle}</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                {slug && (
                  <li className="breadcrumb-item">
                    <Link to="/servicios/social-media">Social media marketing</Link>
                  </li>
                )}
                <li className="breadcrumb-item active">{sectionTitle}</li>
              </ol>
              <div className="divider-15 d-none d-xl-block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
