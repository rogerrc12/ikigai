import React, { useState, useEffect, useRef } from "react"
import Logo from "../assets/images/logo.svg"
import { Link } from "gatsby"

const IndexHeader = () => {
  const [state, setState] = useState({ fixed: false, active: false })
  const { fixed, active } = state

  const headerRef = useRef()

  useEffect(() => {
    const handleMenu = () => {
      if (window.scrollY > 10) {
        setState({ ...setState, fixed: true })
      } else {
        setState({ ...setState, fixed: false })
      }
    }

    window.addEventListener("scroll", handleMenu, { passive: true })

    return () => window.removeEventListener("scroll", handleMenu)
  }, [])

  const onToggle = () =>
    setState(prevState => {
      return { ...prevState, active: !prevState.active }
    })

  return (
    <div className="header_absolute header_transparent">
      <header
        ref={headerRef}
        className={`page_header ds header-padding ${
          fixed ? "affix" : "affix-top"
        } ${active ? "mobile-active" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-9">
              <Link to="/" className="logo text-center">
                <img src={Logo} alt="Ikigai Marketer" />
              </Link>
            </div>
            <div className="col-lg-6 col-3 text-center d-none d-lg-block">
              <div className="header_text small-text">
                <p>info@ikigaimarketer.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* header toggler */}
        <div
          className={`page_header_side header_slide main-toggle ls ${
            active ? "active-slide-side-header" : ""
          }`}
        >
          <span
            className={`toggle_menu toggle_menu_side header-slide ${
              active ? "mobile-active active" : ""
            }`}
            onClick={onToggle}
            onKeyDown={onToggle}
            role="button"
            tabIndex={0}
          >
            <span/>
          </span>
          <div className="scroll-wrapper scrollbar-macosx">
            <div className="side_header_inner">
              <div className="container">
                <div className="header-side-menu">
                  <Link to="/" className="logo text-center">
                    <img src={Logo} alt="Ikigai Marketer" />
                  </Link>
                  {/* main side nav start */}
                  <nav className="mainmenu_side_wrapper">
                    <ul className="nav menu-click">
                      <li className="active">
                        <Link to="/">Inicio</Link>
                      </li>
                      <li>
                        <Link to="/about">Acerca</Link>
                      </li>
                      <li>
                        <Link to="/services">Servicios</Link>
                      </li>
                      {/* blog */}
                      {/* gallery */}
                      <li>
                        <Link to="/portfolio">Portafolio</Link>
                      </li>
                      {/* eof Gallery */}
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      {/* eof blog */}
                      <li>
                        <Link to="/contact">Contacto</Link>
                      </li>
                      {/* eof contacts */}
                    </ul>
                  </nav>
                  {/* eof main side nav */}
                  <div className="contact-nav__footer">
                    <a href="tel:+51918371703">+51 918 371 703</a>
                    <div className="contact-nav__social">

                      <a href="https://www.facebook.com/ikigaimarketer/" target="_blank" rel="noreferrer noopener">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>

                      <a href="https://www.instagram.com/ikigaimarketer/" target="_blank" rel="noreferrer noopener">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>

                      <a href="https://www.linkedin.com/company/ikigai-marketer/" target="_blank" rel="noreferrer noopener">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>

                      <a href="https://twitter.com/ikigaimarketer" target="_blank" rel="noreferrer noopener">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default IndexHeader
