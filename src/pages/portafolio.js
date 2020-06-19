import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Gallery from "../components/PortfolioGallery";
import useSiteMetadata from '../hooks/siteMetaData';

const Portfolio = ({ location }) => {
  const { siteMetadata: { url } } = useSiteMetadata();

  return (
    <Layout location="/portfolio" sectionTitle="Portafolio">
      <Head title="Portafolio" url={url + location.pathname} />

      <section className="ls s-pt-50 s-pb-100 gallery-cols">
        <div className="d-none d-lg-block divider-20"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Gallery />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
