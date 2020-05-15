import React from "react"
import Icon from "../assets/img/icon.svg";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Moment from "react-moment"

const IndexFooter = () => {
  const { wordpress: { posts: { nodes: posts } } } = useStaticQuery(graphql`
      {
          wordpress {
              posts(first: 2) {
                  nodes { title slug date }
              }
          }
      }
  `);
  
  console.log(posts);
  
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
                    Posts recientes
                  </h3>
                  {posts.map(post => (
                    <div key={post.slug}>
                      <p>{post.title}</p>
                      <Link className="small-text" to={`/blog/post/${post.slug}`}>
                        <Moment format="Do MMM, YYYY">{post.date}</Moment>
                      </Link>
                      <div className="divider-25 d-none d-xl-block" />
                    </div>
                  ))}
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
              </div>
            </div>
            <div
              className="col-md-4 text-center animate"
              data-animation="fadeInUp"
            >
              <div className="widget widget_mailchimp">
                <h3 className="widget-title">Newsletter</h3>
                <p>
                  Ingresa tu correo para siempre estar actualizado
                  de nuestras promociones y tarifas!
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
                    placeholder="Correo electrónico"
                  />
                  <div className="response" />
                </form>
              </div>
              <ul>
                <li className="icon-inline">
                  <div className="icon-styled icon-top color-main fs-14">
                    <i className="fa fa-map-marker" />
                  </div>
                  <p>Av. el Ejercito 749 Miraflores, Lima, Peru</p>
                </li>
                <li className="icon-inline">
                  <div className="icon-styled icon-top color-main fs-14">
                    <i className="fa fa-phone" />
                  </div>
                  <p>+51-1-693-8145</p>
                  <p>+51-918-371-703</p>
                </li>
                <li className="icon-inline">
                  <div className="icon-styled icon-top color-main fs-14">
                    <i className="fa fa-envelope" />
                  </div>
                  <p>
                    <a href="mailto: info@ikigaimarketer.com">info@ikigaimarketer.com</a>
                  </p>
                </li>
              </ul>
              <div className="widget widget_social_buttons">
                <a
                  href="https://www.facebook.com/ikigaimarketer/"
                  className="facebook-icon rounded-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"/>
                </a>
                <a
                  href="https://www.instagram.com/ikigaimarketer/"
                  className="instagram-icon rounded-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"/>
                </a>
                <a
                  href="https://www.linkedin.com/company/ikigai-marketer/"
                  className="linkedin-icon rounded-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"/>
                </a>
                <a
                  href="https://twitter.com/ikigaimarketer"
                  className="twitter-icon rounded-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"/>
                </a>
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
                <span className="copyright_year">2020</span> Todos los derechos reservados
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
