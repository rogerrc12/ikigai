import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import TeamSlider from "../components/TeamSlider"
import Map from "../components/GoogleMaps"
import { graphql } from "gatsby"

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
    gallery1: file(relativePath: { eq: "gallery/gallery-1.jpg" }) {
      ...OriginalImage
    }
    gallery2: file(relativePath: { eq: "gallery/gallery-2.jpg" }) {
      ...OriginalImage
    }
    gallery3: file(relativePath: { eq: "gallery/gallery-3.jpg" }) {
      ...OriginalImage
    }
    gallery4: file(relativePath: { eq: "gallery/gallery-4.jpg" }) {
      ...OriginalImage
    }
  }
`

const About = ({ data }) => {
  return (
    <Layout location="/about" sectionTitle="Acerca de Ikigai">
      <Head title="Acerca de Ikigai" />

      {/* Quote */}
      <section className="s-pt-30 s-pt-lg-50 ls about">
        <div className="divider-60 d-none d-xl-block" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="main-content text-center">
                <h5>
                  "We love what we do and we love helping others succeed at what
                  they love to do."
                </h5>
                <i className="rt-icon2-user" />
                <p>
                  Gregory F. Parrino,
                  <span className="link-a">
                    <a href="/">CEO</a>
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
              <h6>Who We Are</h6>
              <div className="icon-content">
                <p>
                  We are a team of San Diego web design and development
                  professionals who love partnering with good people and
                  businesses to help them achieve online success.
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
                <h6>What We Do</h6>
                <p>
                  We’re focused on honing our crafts and bringing everything we
                  have to the table for our clients. We create custom,
                  functional websites focused on converting your users into
                  customers.
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
                <h6>Why We Do It</h6>
                <p>
                  Each of us loves what we do and we feel that spirit helps
                  translate into the quality of our work. Working with clients
                  who love their work combines into a fun, wonderful partnership
                  for everyone involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services gallery */}
      <section className="s-pt-20 s-pt-lg-30 gallery-carousel main-gallery container-px-0">
        <div className="container-fluid">
          <div className="divider-5 d-none d-xl-block" />
          <div className="row">
            <div className="col-md-3">
              <div className="vertical-item item-gallery content-absolute text-center ds web-design">
                <div className="item-media">
                  <img
                    src={data.gallery1.childImageSharp.original.src}
                    alt="gallery"
                  />
                  <div className="media-links"></div>
                </div>
                <div className="item-content">
                  <h6>
                    <a className="small-text" href="gallery-regular.html">
                      web-design
                    </a>
                  </h6>
                  <h6>
                    <a href="gallery-regular.html">Clothes Badge Design</a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="vertical-item item-gallery content-absolute text-center ds logo-design">
                <div className="item-media">
                  <img
                    src={data.gallery2.childImageSharp.original.src}
                    alt="gallery"
                  />
                  <div className="media-links"></div>
                </div>
                <div className="item-content">
                  <h6>
                    <a className="small-text" href="gallery-regular.html">
                      logo-design
                    </a>
                  </h6>
                  <h6>
                    <a href="gallery-regular.html">Clothes Badge Design</a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="vertical-item item-gallery content-absolute text-center ds advertisement">
                <div className="item-media">
                  <img
                    src={data.gallery3.childImageSharp.original.src}
                    alt="gallery"
                  />
                  <div className="media-links"></div>
                </div>
                <div className="item-content">
                  <h6>
                    <a className="small-text" href="gallery-regular.html">
                      advertisement
                    </a>
                  </h6>
                  <h6>
                    <a href="gallery-regular.html">Clothes Badge Design</a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="vertical-item item-gallery content-absolute text-center ds branding">
                <div className="item-media">
                  <img
                    src={data.gallery4.childImageSharp.original.src}
                    alt="gallery"
                  />
                  <div className="media-links"></div>
                </div>
                <div className="item-content">
                  <h6>
                    <a className="small-text" href="gallery-regular.html">
                      branding
                    </a>
                  </h6>
                  <h6>
                    <a href="gallery-regular.html">Clothes Badge Design</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team slider */}
      <section className="page_slider team_slider" id="team">
        <div className="container-fluid">
          <TeamSlider />
        </div>
      </section>

      <Map />
    </Layout>
  )
}

export default About
