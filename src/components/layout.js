import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import IndexHeader from "./IndexHeader"
import Footer from "./footer"
import IndexFooter from "./IndexFooter"

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

          {location !== "/" ? <Footer /> : <IndexFooter />}
        </div>
      </div>
      
      {location !== '/contact' ? <div className="elfsight-app-8307196d-71bd-4c5d-947d-d69a87fdce9c"/> : null}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
