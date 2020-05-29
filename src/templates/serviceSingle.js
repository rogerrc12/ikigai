import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import parser from 'html-react-parser';
import useSiteMetadata from '../hooks/siteMetaData';
import Head from "../components/head"

export const query = graphql`
    query($slug: ID!) {
        wordpress {
            social_media(id: $slug, idType: SLUG) {
                title
                services {
                    details { description subtitle image { altText sourceUrl } scope { scopeItem } align
                    }
                }
                slug
            }
        }
    }
`;

function ServiceSingle({ data, location }) {
  const { wordpress: { social_media: media } } = data;
  const { siteMetadata: { url } } = useSiteMetadata();

  
  return (
    <Layout location={`/services/social-media/${media.slug}`} slug={media.slug} sectionTitle={media.title}>
      <Head title={media.title} url={url + location.pathname} />
      <section className="ls s-pt-50 s-pb-130 c-gutter-60 event-single">
        <div className="container">
          <div className="row">
        
            <div className="d-none d-lg-block divider-65"/>
        
            <main className="col-lg-12">
                <ServicesList services={media.services} />
            </main>
            
          </div>
        </div>
      </section>
    </Layout>
  )
};

const ServicesList = ({ services }) => (
  services.details.map(service => (
    <article className="single-service" key={service.subtitle}>
      <div className="row">
        <div className={`col-12 col-md-8 ${service.align === 'left' ? 'order-md-1 order-2' : 'order-2' }`}>

          <div className="entry-content">
            <p className="excerpt">{service.subtitle}</p>
  
            {parser(service.description)}
  
            <ul className="list1">
              {service.scope.map((item, i) => <li key={i}>{item.scopeItem}</li>)}
            </ul>
  
            <a href="https://wa.me/51918371703?text=Estoy%20interesado%20en%20sus%20servicios"
               target="_blank" rel="noopener noreferrer"
               className="btn btn-outline-maincolor">
              ¡Quiero contactarlos!
            </a>

          </div>


        </div>

        <div className={`col-12 col-md-4 ${service.align === 'left' ? 'order-md-2 order-1' : 'order-1' }`}>
          <div className="media-item">
            <img src={service.image.sourceUrl} alt={service.image.altText} />
          </div>
        </div>
      </div>
    </article>
  ))
);

export default ServiceSingle;