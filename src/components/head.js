/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useSiteMetaData from '../hooks/siteMetaData';

function SEO({ description, keywords, lang, meta, title, url }) {
  const { siteMetadata } = useSiteMetaData();

  const metaDescription = description || siteMetadata.description;
  const metaKeywords = keywords || siteMetadata.keywords;
  const metaUrl = url || siteMetadata.url;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'keywords',
          content: metaKeywords
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `es_ES`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      script={[
        {
          type: 'text/javascript',
          innerHTML: 'function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"39c80d58ccc10406042219f3bd040104"})})'
        }
      ]}
    >
      <link rel="canonical" href={metaUrl} />
      <script src="https://apps.elfsight.com/p/platform.js" defer/>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: `Somos una agencia creativa digital especializada en la comunicación omnicanal. `,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
