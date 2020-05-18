import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import IndexHeader from "./IndexHeader"
import Footer from "./footer"
import IndexFooter from "./IndexFooter"

const SocialIcons = () => {
  return (
    <div className="social_icons">
      <a href="https://www.facebook.com/ikigaimarketer/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook-square" aria-hidden="true" />
      </a>
      <a href="https://www.instagram.com/ikigaimarketer/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
      <a href="https://www.linkedin.com/company/ikigai-marketer/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>
      <a href="https://twitter.com/ikigaimarketer" target="_blank" rel="noopener noreferrer">
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
  
          <Footer />
          
        </div>
        
        {location !== '/' ? <SocialIcons /> : null}
        {location !== '/contact' 
          ? <a href="https://wa.me/51918371703?text=Estoy%20interesado%20en%20sus%20servicios"
               className="whatsapp-btn" target="_blank" rel="noopener noreferrer"
            >
              <i className="fa fa-envelope" style={{ marginRight: '5px' }} /> Consultoria gratuita
            </a> : null}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
