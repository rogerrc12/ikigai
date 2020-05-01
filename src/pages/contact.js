import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"

export const OriginalImage = graphql`
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
    icon1: file(relativePath: { eq: "icon4.png" }) {
      ...OriginalImage
    }
    icon2: file(relativePath: { eq: "icon5.png" }) {
      ...OriginalImage
    }
    icon3: file(relativePath: { eq: "icon6.png" }) {
      ...OriginalImage
    }
  }
`

const Contact = ({ data }) => {
  return (
    <Layout location="/contact" sectionTitle="Contáctanos">
      <Head title="Contacto" />

      <section className="s-pt-30 s-pt-lg-100 s-pb-30 s-pb-lg-100 ls teaser-contact-icon contact3">
        <div className="divider-15 d-none d-xl-block" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center call-icon">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon1.childImageSharp.original.src}
                    alt="icon 1"
                  />
                </div>
              </div>
              <h6>Call Us</h6>
              <p className="teaser-content">
                <strong>New Accounts:</strong> 1-800-123-4567
                <br />
                <strong>Support:</strong> 1-800-123-4569
              </p>
            </div>
            <div className="col-md-4 text-center write-icon">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon2.childImageSharp.original.src}
                    alt="icon 2"
                  />
                </div>
              </div>
              <h6>Write Us</h6>
              <p className="teaser-content">
                example@example.com
                <br /> example@example.com
              </p>
            </div>
            <div className="col-md-4 text-center visit-icon">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon3.childImageSharp.original.src}
                    alt="icon 3"
                  />
                </div>
              </div>
              <h6>Visit Us</h6>
              <p className="teaser-content">
                2231 Sycamore Lake Road
                <br /> Green Bay, WI 54304
              </p>
            </div>
          </div>
        </div>
        <div className="divider-10 d-none d-xl-block" />
      </section>

      <section className="ls support-section s-py-10 s-py-lg-100 s-py-xl-130 text-md-center text-lg-left">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <h1>Live Support</h1>
              <p>
                Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et usto duo
                dolores eta rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet, consetetur.
              </p>
              <h6>
                Call Us Now:
                <span className="color-main">1-800-123-4567</span>
                <span className="small">or...</span>
              </h6>
              <a href="#" className="btn btn-outline-maincolor">
                Start Chat Now!
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
