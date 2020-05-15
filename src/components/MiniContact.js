import React from 'react';
import DarkLineShort from "../assets/img/dark_line_short.png";
import { useStaticQuery, graphql } from 'gatsby';

function MiniContact() {
  const data = useStaticQuery(graphql`
      {
          icon1: file(relativePath: { eq: "icon1.png" }) {
              childImageSharp { original { src } }
          }
          icon2: file(relativePath: { eq: "icon2.png" }) {
              childImageSharp { original { src } }
          }
          icon3: file(relativePath: { eq: "icon3.png" }) {
              childImageSharp { original { src } }
          }
      }
  `);
  
  return (
    <section
      className="s-pt-50 s-pb-100 s-pt-lg-30 s-pb-lg-75 ls ms teaser-contact-icon main-icon s-parallax"
      id="contact"
    >
      <div className="corner corner-inverse" />
      <div className="container">
        <div className="divider-10 d-none d-xl-block" />
        <div className="row c-mb-50 c-mb-lg-0">
          <div className="col-lg-4 text-center">
            <div className="border-icon">
              <div className="teaser-icon">
                <img
                  src={data.icon1.childImageSharp.original.src}
                  alt="icon"
                />
              </div>
            </div>
            <h6>Llámanos</h6>
            <p>
              <strong>Local:</strong> +51-1-693-8145
              <br />
              <strong>Móvil:</strong> +51-918-371-703
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <div className="border-icon">
              <div className="teaser-icon">
                <img
                  src={data.icon3.childImageSharp.original.src}
                  alt="icon"
                />
              </div>
            </div>
            <h6>Escríbenos</h6>
            <p>
              <a href="mailto: info@ikigaimarketer.com">info@ikigaimarketer.com</a>
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <div className="border-icon">
              <div className="teaser-icon">
                <img
                  src={data.icon2.childImageSharp.original.src}
                  alt="icon"
                />
              </div>
            </div>
            <h6>Visítanos</h6>
            <p>
              Av. del ejercito 749, Miraflores
              <br /> Lima, Perú
            </p>
          </div>
        </div>
        <div className="divider-30 d-none d-lg-block" />
        <div className="text-center img-wrap col-md-12 layout-2">
          <img src={DarkLineShort} alt="dark line" />
        </div>
      </div>
      <div className="divider-10" />
    </section>
  );
}

export default MiniContact;