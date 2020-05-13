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
        featuredImage { sourceUrl altText }
        addons { advantages { description } servicesList { description percentage } }
      }
    }
    allServices: wordpress { servicios { nodes { title slug } } }
  }
`

const Service = ({ data }) => {
  const { servicios: { nodes: servicios } } = data.allServices;
  const { servicioBy } = data.singleService
  const { servicesList, advantages } = data.singleService.servicioBy.addons;

  
  return (
    <Layout
      location={`/services${servicioBy.slug}`}
      sectionTitle={servicioBy.title}
    >
      <Head title={servicioBy.title} />

      <section className="ls s-pt-30 s-pb-50 s-pt-lg-50 s-pb-lg-100 c-mb-50 service-item4">
        <div className="d-none d-lg-block divider-65"/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 c-gutter-50 service-widget">

              <h6>Nuestros servicios</h6>

              <ul className="list">
                {servicios.map(service => (
                  <li key={service.slug}>
                    <Link to={`services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-md-8">
              <img src={servicioBy.featuredImage.sourceUrl} alt={servicioBy.featuredImage.altText} />
              <div className="icon-box hero-bg single">
                {parser(servicioBy.content)}
                <div className="row c-gutter-60 c-mb-20 c-mb-lg-40">
                  <div className="col-md-12 col-lg-6 left-part">
                    <div className="progress-service">
                      <h6>Nuestra Experiencia</h6>
                      {servicesList.map((addon, i) => (
                        <Fragment key={i}>
                          <p className="progress-title">{addon.description}</p>
                          <div className="progress">
                            <div
                              className="progress-bar bg-maincolor"
                              role="progressbar"
                            >
                            </div>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 list-comtent">
                    <h6>Nuestras Ventajas</h6>
                    <ul className="list1">
                      {advantages.map((advantage, i) => <li key={i}>{advantage.description}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* .col-* */}
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
