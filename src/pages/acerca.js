import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
// import TeamSlider from "../components/TeamSlider";
import PortfolioList from '../components/PortfolioList';
import Map from "../components/GoogleMaps"
import { graphql } from "gatsby";
import useSiteMetadata from '../hooks/siteMetaData';

export const originalImage = graphql`
  fragment OriginalImage on File {
    childImageSharp {
      original {
        src
      }
    }
  }
`

export const query = graphql`
  {
    icon1: file(relativePath: { eq: "icon1_about.png" }) {
      ...OriginalImage
    }
    icon2: file(relativePath: { eq: "icon2_about.png" }) {
      ...OriginalImage
    }
    icon3: file(relativePath: { eq: "icon3_about.png" }) {
      ...OriginalImage
    }
  }
`

const About = ({ data, location }) => {
  const { siteMetadata: { url } } = useSiteMetadata();

  return (
    <Layout location="/about" sectionTitle="Acerca de Ikigai">
      <Head title="Acerca de Ikigai" url={url + location.pathname} />

      {/* Quote */}
      <section className="s-pt-30 s-pt-lg-50 ls about">
        <div className="divider-60 d-none d-xl-block" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="main-content text-center">
                <h5>
                  “Un proyecto nuevo es un nuevo amor, una nueva oportunidad para entregarlo todo.”
                </h5>
                <i className="rt-icon2-user" />
                <p>
                  Lissette Linares,
                  <span className="link-a">
                    <a href="/"> CEO</a>
                  </span>
                </p>
                <div className="divider-10 d-none d-xl-block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us 3 titles */}
      <section className="s-pt-0  s-pb-30 s-pt-lg-30 s-pb-lg-75 ls about-icon teaser-contact-icon">
        <div className="divider-10 d-none d-xl-block" />
        <div className="container">
          <div className="row c-mt-50 c-mt-lg-0">
            <div className="col-lg-4 text-center call-icon">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon1.childImageSharp.original.src}
                    alt="icon 1"
                  />
                </div>
              </div>
              <h6>Quiénes somos</h6>
              <div className="icon-content">
                <p>
                  En Ikigaimarketer encontrarás un grupo de expertos en ventas, 
                  marketing y programación entrenado para hacerte crecer en el mundo digital.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center write-icon">
              <div className="divider-30 d-none d-xl-block" />
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon2.childImageSharp.original.src}
                    alt="icon 2"
                  />
                </div>
              </div>
              <div className="icon-content">
                <h6>Que hacemos</h6>
                <p>
                  Crecemos y mejoramos tu reconocimiento online a tráves del uso de herramientas de Inbound Marketing. Cuidamos tu marca, por lo que te asesoramos sobre los canales que debes usar para llegar a donde quieres.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center visit-icon">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon3.childImageSharp.original.src}
                    alt="icon 3"
                  />
                </div>
              </div>
              <div className="icon-content">
                <h6>Porque lo hacemos</h6>
                <p>
                  Cada proyecto representa una nueva oportunidad de dar lo mejor de nosotros y de cumplir nuestro Ikigai: llevar al mundo una marca con próposito y sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio gallery */}
      <section className="s-pt-20 s-pt-lg-30 gallery-carousel main-gallery container-px-0">
        <div className="container-fluid">
          <div className="divider-5 d-none d-xl-block" />
          <div className="row">
            <PortfolioList />
          </div>
        </div>
      </section>

      {/* Team slider */}
      {/* <section className="page_slider team_slider" id="team">
        <div className="container-fluid">
          <TeamSlider />
        </div>
      </section> */}

      <Map 
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyD1Ds1rJsnKvy9babSVYPIg5cXrMwGJ_Bo"
        containerElement={<div style={{ height: "85vh", width: "100%" }} />}
        mapElement={<div style={{ height: '100%' }} />}
        loadingElement={<p>Cargando...</p>}
      />
    </Layout>
  )
}

export default About
