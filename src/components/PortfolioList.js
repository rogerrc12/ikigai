import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function PortfolioList() {
  const { wordpress: { portafolio: { nodes: portafolio } } } = useStaticQuery(graphql`
      {
          wordpress {
              portafolio(first: 4) {
                  nodes {
                      title
                      details { link }
                      featuredImage { altText sourceUrl }
                      categories(first: 1) { nodes { name } }
                  }
              }
          }
      }
  `)
  
  return portafolio.map(item => (
    <div className="col-md-3" key={item.featuredImage.sourceUrl}>
      <div className="vertical-item item-gallery content-absolute text-center ds web-design">
        <div className="item-media">
          <img
            src={item.featuredImage.sourceUrl}
            alt={item.featuredImage.altText}
          />
          <div className="media-links"/>
        </div>
        <div className="item-content">
          <h6>
            <a className="small-text" href={item.details.link} target="_blank" rel="noopener noreferrer">
              {item.categories.nodes[0].name}
            </a>
          </h6>
          <h6>
            <a href={item.details.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
          </h6>
        </div>
      </div>
    </div>
  ));
}

export default PortfolioList;