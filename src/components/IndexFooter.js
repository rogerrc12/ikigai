import React from "react"
import Icon from "../assets/img/icon.svg"

const IndexFooter = () => {
  return (
    <>
      <footer className="page_footer ds s-parallax s-pt-60 s-pb-30 s-pt-md-130 s-pb-md-10 s-pt-lg-130 s-pb-lg-0 s-py-xl-100 c-gutter-60 bordered-footer bottom-none">
        <div className="container">
          <div className="row">
            <div className="divider-110 d-none d-xl-block" />
            <div
              className="col-md-4 text-center animate"
              data-animation="fadeInUp"
            >
              <div className="widget widget_text">
                <div className="blog-footer">
                  <h3 className="widget-title next-image-background">
                    Recent Post
                  </h3>
                  <p>3 Tips to Refresh a Lackluster Marketing Strategy</p>
                  <a className="small-text" href="https://google.com">
                    January 11, 2018
                  </a>
                  <div className="divider-25 d-none d-xl-block" />
                  <p>Maximize B2B Website Retargeting</p>
                  <a className="small-text" href="https://google.com">
                    January 08, 2018
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 text-center animate footer-contact"
              data-animation="fadeInUp"
            >
              <div className="widget widget_icons_list">
                <div className="footer_logo">
                  <img src={Icon} alt="Icono ikigai" />
                </div>
                <h3 className="widget-title name">
                  IKIGAI
                  <span>MARKETER</span>
                </h3>
                <p className="next">
                  We create experiences that change the way people interact with
                  brands – and with each other.
                </p>
                <ul>
                  <li className="icon-inline">
                    <div className="icon-styled icon-top color-main fs-14">
                      <i className="fa fa-map-marker" />
                    </div>
                    <p>90000, New Str. 123, Los Angeles, CA</p>
                  </li>
                  <li className="icon-inline">
                    <div className="icon-styled icon-top color-main fs-14">
                      <i className="fa fa-phone" />
                    </div>
                    <p>1-800-123-4567</p>
                  </li>
                  <li className="icon-inline">
                    <div className="icon-styled icon-top color-main fs-14">
                      <i className="fa fa-envelope" />
                    </div>
                    <p>
                      <a href="https://google.com">email@example.com</a>
                    </p>
                  </li>
                </ul>
                <div className="widget widget_social_buttons">
                  <a
                    href="https://facebook.com"
                    className="facebook-icon rounded-icon"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    className="instagram-icon rounded-icon"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="linkedin-icon rounded-icon"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 text-center animate mailchimp"
              data-animation="fadeInUp"
            >
              <div className="widget widget_mailchimp">
                <h3 className="widget-title">Newsletter</h3>
                <p>
                  Enter your email address here always to be
                  <br /> updated. We promise not to spam!
                </p>
                <form className="signup" action="/">
                  <label htmlFor="mailchimp_email">
                    <span className="screen-reader-text">Subscribe:</span>
                  </label>
                  <input
                    id="mailchimp_email"
                    name="email"
                    type="email"
                    className="form-control mailchimp_email"
                    placeholder="Email address"
                  />
                  <div className="response" />
                </form>
              </div>
            </div>
            <div className="divider-10 d-none d-xl-block" />
          </div>
        </div>
      </footer>
      <section className="page_copyright light-copy ls s-py-25 copyright-ls">
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

export default IndexFooter
