import React from "react"
import FooterLogo from "../assets/images/footer_logo.svg"

const footer = () => {
  return (
    <>
      <footer className="page_footer corner-footer ds s-pt-30 s-pb-0 s-pb-lg-10 s-pb-xl-50 c-gutter-60 s-parallax">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="divider-20 d-none d-xl-block" />
              <div
                className="col-md-12 mt-4 text-center animate footer_logo"
                data-animation="fadeInUp"
              >
                <img
                  className="margin-negative"
                  src={FooterLogo}
                  alt="Ikigai marketer"
                />
                <div className="widget widget_social_buttons">
                  <a
                    href="http://www.facebook.com/#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-facebook color-icon"></i>
                  </a>
                  <a
                    href="http://www.twitter.com/#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-instagram color-icon"></i>
                  </a>
                  <a
                    href="http://www.linkedin.com/#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin color-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="page_copyright light-copy cs s-py-20 s-py-lg-5 s-parallax copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="divider-20 d-none d-lg-block" />
            <div className="col-md-12 text-center">
              <p>
                © Copyright
                <span className="copyright_year">2018</span> All Rights Reserved
              </p>
            </div>
            <div className="divider-20 d-none d-lg-block" />
          </div>
        </div>
      </section>
    </>
  )
}

export default footer
