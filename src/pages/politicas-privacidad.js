import React from 'react';
import Layout from "../components/layout";
import Head from "../components/head";
import useSiteMetadata from '../hooks/siteMetaData';

const PoliticaPrivacidad = ({ location }) => {
  const { siteMetadata: { url } } = useSiteMetadata();

  return (
    <Layout location="/politicas-privacidad">
      <Head title="Politicas de privacidad" url={url +  location.pathname} />
      <h1>Politicas de privacidad</h1>
    </Layout>
  )
}

export default PoliticaPrivacidad