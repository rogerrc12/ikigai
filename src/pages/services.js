import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql, Link } from "gatsby";
import useSiteMetadata from '../hooks/siteMetaData';

export const query = graphql`
  {
    wordpress {
      servicios (where: {orderby: {field: DATE, order: ASC}}) {
        nodes {
          excerpt
          title(format: RENDERED)
          addons {
            thumbnail {
              sourceUrl(size: LARGE)
              altText
            }
          }
          slug
        }
      }
    }
  }
`

const Services = ({ data: { wordpress: { servicios: { nodes: services }, }, }, location }) => {
  const { siteMetadata: { url } } = useSiteMetadata();

  return (
    <Layout location="/services" sectionTitle="Nuestros Servicios">
      <Head title="Nuestros servicios" url={url + location.pathname} />

      <section className="ls s-pt-50 s-pb-100 s-pb-lg-130 c-gutter-30 c-mb-30 service-item3">
        <div className="d-none d-lg-block divider-65" />
        <div className="container">
          <div className="row">
            {services.map(service => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={service.slug}>
                <div className="vertical-item text-center">
                  <div className="item-media">
                    <Link to={`/services/${service.slug}`}>
                      <img
                        src={service.addons.thumbnail.sourceUrl}
                        alt={service.addons.thumbnail.altText}
                      />
                    </Link>
                  </div>
                  <div className="item-content hero-bg">
                    <h6>
                      <Link to={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h6>
                    <div
                      dangerouslySetInnerHTML={{ __html: service.excerpt }}
                    />
                    <Link to={`/services/${service.slug}`} className="btn-link">
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-none d-lg-block divider-45" />
      </section>
    </Layout>
  )
}

export default Services
