import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import BlogSlider from "../components/BlogSlider"
import Moment from "react-moment"
import { graphql } from "gatsby"

export const query = graphql`
  {
    wordpress {
      posts {
        edges {
          node {
            content
            date
            featuredImage {
              altText
              sourceUrl(size: LARGE)
            }
            title(format: RENDERED)
            author {
              name
              avatar {
                url
                width
              }
            }
          }
        }
      }
    }
  }
`

const Blog = ({
  data: {
    wordpress: {
      posts: { edges: posts },
    },
  },
}) => {
  return (
    <Layout location="/blog" sectionTitle="Blog">
      <Head title="blog" />

      <section className="ls s-py-50 s-pt-lg-50 s-pb-lg-100 blog3">
        <div className="container">
          <div className="d-none d-lg-block divider-65"></div>

          <div className="row">
            <div className="col-lg-12 blog_slider">
              <section className="page_slider blog-slide">
                <BlogSlider />
              </section>
            </div>
          </div>

          <div className="row c-gutter-60">
            <main className="col-lg-7 col-xl-8 order-lg-2">
              {posts.map(post => (
                <article className="text-md-left vertical-item blog-padding ls ms post type-post status-publish format-standard has-post-thumbnail sticky">
                  <div className="post-thumb">
                    {post.node.featuredImage ? (
                      <a href="post3.html">
                        <img
                          src={post.node.featuredImage.sourceUrl}
                          alt={post.node.featuredImage.altText}
                        />
                      </a>
                    ) : null}
                    <div className="entry-meta post-icons small-text">
                      <i className="first fa fa-calendar color-main fs-14"></i>{" "}
                      <a href="#">
                        <Moment format="DD/MM/YYYY">{post.node.date}</Moment>
                      </a>
                      {/* <i className="fa fa-tags color-main fs-14"></i>
                      <a href="#">Images</a> */}
                      <div className="face-image half-border">
                        <img
                          alt={post.node.author.name}
                          src={post.node.author.avatar.url}
                          width={post.node.author.avatar.width}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title">
                        <a href="post3.html" rel="bookmark">
                          {post.node.title}
                        </a>
                      </h3>
                    </header>

                    <div className="entry-content">
                      <p>
                        Leads. Leads. Leads. If lead generation is one of the
                        main goals of your marketing strategy, it’s important to
                        have a B2B website design that is crafted around
                        converting and capturing leads.
                      </p>
                      <p>
                        In this blog, we take a look at various ways to ensure
                        your website is ready to convert visitors into new
                        leads.
                      </p>
                      <div className="blog-link">
                        <a href="post3.html" className="btn-link">
                          Leer más
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </main>

            <aside class="col-lg-5 col-xl-4 order-lg-1">
              <div class="categories-dropdown">
                <div class="widget widget_categories dropdown">
                  <h3 class="widget-title">Categories</h3>

                  <label class="screen-reader-text" for="cat">
                    Categories dropdown
                  </label>
                  <select name="cat" id="cat" class="postform">
                    <option value="-1">Select Category</option>
                    <option class="level-0" value="3">
                      Corporate
                    </option>
                    <option class="level-0" value="4">
                      Business
                    </option>
                    <option class="level-0" value="5">
                      Entertainment
                    </option>
                    <option class="level-0" value="6">
                      Innovations
                    </option>
                    <option class="level-0" value="8">
                      News
                    </option>
                    <option class="level-0" value="9">
                      Knowledge
                    </option>
                  </select>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
