import React, { Fragment } from "react"
import Layout from "../components/layout"
import parser from "html-react-parser"
import Head from "../components/head"
import { graphql, Link } from "gatsby"
import Slider from "../components/TestimonalSlider"

export const query = graphql`
  query($slug: String!) {
    singleService: wordpress {
      servicioBy(slug: $slug) {
        content
        title
        slug
        featuredImage {
          sourceUrl
          altText
        }
        addons {
          servicesList {
            description
            percentage
          }
        }
      }
    }
    allServices: wordpress {
      category(id: "Y2F0ZWdvcnk6Mw==") {
        children {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    }
  }
`

const Service = ({ data }) => {
  const {
    category: {
      children: { edges: services },
    },
  } = data.allServices
  const { servicioBy } = data.singleService
  const { servicesList } = data.singleService.servicioBy.addons

  return (
    <Layout
      location={`/services${servicioBy.slug}`}
      sectionTitle={servicioBy.title}
    >
      <Head title={servicioBy.title} />

      <div className="service-full">
        <img
          src={servicioBy.featuredImage.sourceUrl}
          alt={servicioBy.featuredImage.altText}
        />
      </div>

      <section className="ls">
        <div className="container ">
          <div className="row c-gutter-60">
            <div className="col-md-8 single-page">
              <div className="item-content">
                <div className="d-none d-lg-block divider-70" />
                {parser(servicioBy.content)}

                <div className="progress-service">
                  {servicesList.map((addon, i) => (
                    <Fragment key={i}>
                      <p className="progress-title">{addon.description}</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-maincolor"
                          role="progressbar"
                        >
                          <span className="float-right">
                            {addon.percentage}%
                          </span>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="d-none d-lg-block divider-40" />
              </div>
            </div>
            {/* .col-* */}
            <div className="col-md-4 hero-bg widget-service">
              <h6>Other Services</h6>
              <ul className="list">
                {services.map(service => (
                  <li key={service.node.slug}>
                    <Link to={`services/${service.node.slug}`}>
                      {service.node.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section_testimonials"
        className="s-pt-30 s-pb-30 s-pt-lg-50 s-pb-lg-100 s-parallax testimonials-sliders ds"
      >
        <div className="container">
          <div className="row">
            <div className="divider-50 d-none d-lg-block" />
            <div className="col-md-12">
              <Slider />
            </div>
            <div className="divider-10 d-none d-lg-block" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Service
