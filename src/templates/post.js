import React from "react"
import Layout from "../components/layout"
import Head from "../components/head";
import { graphql, Link } from 'gatsby';
import parser from 'html-react-parser';
import Moment from "react-moment"

export const query = graphql`
  query ($slug: String!){
    wordpress {
      postBy(slug: $slug) {
          content
          featuredImage { altText sourceUrl(size: LARGE) }
          author { avatar { url } name }
          date
          tags { nodes { name } }
      }
    }
  }
`;

const Post = ({ data }) => {
  const { wordpress: { postBy: post } } = data;
  console.log(post);

  return (
    <Layout location="/blog" sectionTitle="blog">
      <Head title="blog" />
      <section className="ls s-pt-50 s-pb-130 c-gutter-60 post5">
        <div className="container">
          <div className="row">
            <div className="d-none d-lg-block divider-65"/>
            <article className="vertical-item post type-post status-publish format-standard has-post-thumbnail">
              {post.featuredImage ?
                <div className="post-thumb">
                  <img width="1300px" src={post.featuredImage.sourceUrl} alt={post.featuredImage.altText} />
                </div> : null
              }
              <div className="item-content hero-bg blog-post">
                <div className="entry-content">
                  {parser(post.content)}
                </div>
              </div>
              <div className="entry-meta ds with_padding">
                {post.author ?
                  <>
                    <div className="entry-avatar">
                      <img src={post.author.avatar.url} alt={post.author.name} />
                    </div>
                    <div className="entry-author">
                  <span className="author vcard">
                    {post.author.name}
                  </span>
                    </div>
                  </> : null
                }
                {/* .entry-author */}
                <div>
                  <i className="fa fa-calendar color-main fs-14" />{" "}
                  <time dateTime={post.date}>
                    <Moment format="DD-MM-YYYY">{post.date}</Moment>
                  </time>
                </div>
                {/* .entry-date */}
                {post.tags.nodes.length > 0 ?
                    <div className="tags">
                      <span>
                        <i className="fa fa-tags color-main fs-14" />
                        tags:{" "}
                      </span>
                      {post.tags.nodes.map(tag => (
                        <Link className="tags" to="/blog">
                          {tag.name}<span>,</span>
                        </Link>
                      ))}
                    </div> : null
                }
                <div className="entry-blog-share text-right">
                  <a href="/">
                    <i className="fa fa-share-alt" />
                  </a>
                </div>
                {/* eof .entry-blog-share */}
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Post
