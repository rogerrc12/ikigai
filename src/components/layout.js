import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import IndexHeader from "./IndexHeader";
import Footer from "./footer";
import { Fade } from "react-reveal";

const SocialIcons = () => {
  return (
    <div className="social_wrapper">
      <Fade left delay={2000}>
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
      </Fade>
    </div>
  );
};

const Layout = ({ location, children, sectionTitle, slug }) => {
  return (
    <>
      {/* <div className="preloader">
        <div className="preloader_image"></div>
      </div> */}

      <div id="canvas">
        <div id="box_wrapper">
          {location !== "/" ? <Header sectionTitle={sectionTitle} slug={slug} /> : <IndexHeader />}

          {location === "/blog" || `/servcies/social-media/${slug}` ? children : <main>{children}</main>}

          <Footer />
        </div>

        <SocialIcons />

        {location !== "/contact" ? (
          <a
            href="https://wa.me/51917685797?text=Estoy%20interesado%20en%20sus%20servicios"
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp" />
          </a>
        ) : null}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
