import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import IndexHeader from "./IndexHeader"
import Footer from "./footer"
import IndexFooter from "./IndexFooter"

const socialIcons = () => {
  return (
    <div className="social_icons">
      <a href="https://www.facebook.com/ikigaimarketer/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook-square" aria-hidden="true" />
      </a>
      <a href="https://www.instagram.com/ikigaimarketer/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
      <a href="#">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>
      <a href="#">
        <i className="fa fa-twitter-square" aria-hidden="true" />
      </a>
    </div> 
  )
}

const Layout = ({ location, children, sectionTitle }) => {
  return (
    <>
      {/* <div className="preloader">
        <div className="preloader_image"></div>
      </div> */}

      <div id="canvas">
        <div id="box_wrapper">
          {location !== "/" ? (
            <Header sectionTitle={sectionTitle} />
          ) : (
            <IndexHeader />
          )}

          {location === "/blog" ? children : <main>{children}</main>}

          {location !== "/" ?
            <>  
              <Footer />
              {socialIcons()}
            </>
            : <IndexFooter />
          }
        </div>
  
        {location !== '/contact' ? <div className="elfsight-app-8307196d-71bd-4c5d-947d-d69a87fdce9c"/> : null}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
