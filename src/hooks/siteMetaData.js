import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetaData = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author,
            keywords,
            url
          }
        }
      }`,
    );
    return site;
}

export default useSiteMetaData;