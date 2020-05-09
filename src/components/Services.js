import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import parser from 'html-react-parser';

function Services() {
  const { wordpress: { servicios: {nodes: servicios} } } = useStaticQuery(graphql`
      {
          wordpress {
              servicios {
                  nodes {
                      addons {
                          icon {
                              altText
                              sourceUrl
                          }
                      }
                      title
                      excerpt
                      slug
                  }
              }
          }
      }
  `);
  
  return servicios.map(servicio => (
    <div className="col-12 col-md-6 col-lg-4" key={servicio.slug}>
      <div className="vertical-item text-center">
        <div className="item-media">
          <img
            src={servicio.addons.icon.sourceUrl}
            alt={servicio.addons.icon.altText}
          />
        </div>
        <div className="item-content">
          <h6>
            <Link to={`/services/${servicio.slug}`}>{servicio.title}</Link>
          </h6>
          {parser(servicio.excerpt)}
        </div>
      </div>
    </div>
  ));
}

export default Services;