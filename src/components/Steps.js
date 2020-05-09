import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import parser from 'html-react-parser';

function Steps(props) {
  const { wordpress: { pasos: {nodes: pasos} } } = useStaticQuery(graphql`
      {
          wordpress {
              pasos {
                  nodes {
                      content
                      title
                      featuredImage { altText sourceUrl }
                      attributes { stepNo position }
                  }
              } 
          }
      }
  `);

  return pasos.map((paso, i) => (
    <div key={paso.attributes.stepNo} className={`row align-items-center c-mb-20 c-mb-lg-60 ${paso.attributes.position}`}>
      <div className={`col-12 col-lg-4  ${paso.attributes.position === 'right' ? 'order-lg-3' : ''}`}>
        <div className={`step-left-part ${paso.attributes.position === 'left' ? 'text-right' : ''}`}>
          <h2 className="step-title color1">
            <span className={`color-main${i + 1}`}>{paso.attributes.stepNo}</span>
            {paso.title}
          </h2>
        </div>
      </div>
      <div className={`col-12 col-lg-4 ${paso.attributes.position === 'right' ? 'order-lg-2' : ''}`}>
        <div className="step-center-part text-center">
          <img
            src={paso.featuredImage.sourceUrl}
            alt={paso.featuredImage.sourceUrl}
          />
        </div>
      </div>
      <div className={`col-12 col-lg-4 ${paso.attributes.position === 'right' ? 'order-lg-1 text-right' : ''}`}>
        <div className="step-right-part ">
          {parser(paso.content)}
        </div>
      </div>
    </div>
  ));
}

export default Steps;