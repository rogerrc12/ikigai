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

      <button type="button" id="toTop">
        <span id="toTopHover" style={{ opacity: "0" }}></span>To Top
      </button>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
