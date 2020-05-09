import React from "react"
import Layout from "../components/layout";
import Head from "../components/head";
import BlogSlider from "../components/BlogSlider";
import Moment from "react-moment";
import { Link } from "gatsby";
import parser from 'html-react-parser';

const Blog = ({ pageContext }) => {

  const { group: posts, index, first, last, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Layout location="/blog" sectionTitle="Blog">
      <Head title="blog" />

      <section className="ls s-py-50 s-pt-lg-50 s-pb-lg-100 blog3">
        <div className="container">
          <div className="d-none d-lg-block divider-65"/>

          <div className="row">
            <div className="col-lg-12 blog_slider">
              <section className="page_slider blog-slide">
                <BlogSlider />
              </section>
            </div>
          </div>

          <div className="row c-gutter-60">
            <main className="col-lg-7 col-xl-8 order-lg-2">
              {posts.map((post, i) => (
                <article key={i} className="text-md-left vertical-item blog-padding ls ms post type-post status-publish format-standard has-post-thumbnail sticky">
                  <div className="post-thumb">
                    {post.featuredImage ? (
                      <Link to={`/blog/post/${post.slug}`}>
                        <img
                          src={post.featuredImage.sourceUrl}
                          alt={post.featuredImage.altText}
                        />
                      </Link>
                    ) : null}
                    <div className="entry-meta post-icons small-text">
                      <i className="first fa fa-calendar color-main fs-14"/>{" "}
                      <Link to={`/blog/post/${post.slug}`}>
                        <Moment format="DD/MM/YYYY">{post.date}</Moment>
                      </Link>
                      {/* <i className="fa fa-tags color-main fs-14"></i>
                      <a href="#">Images</a> */}
                      <div className="face-image half-border">
                        <img
                          alt={post.author.name}
                          src={post.author.avatar.url}
                          width={post.author.avatar.width}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title">
                        <Link to={`/blog/post/${post.slug}`} rel="bookmark">
                          {post.title}
                        </Link>
                      </h3>
                    </header>

                    <div className="entry-content">
                      {parser(post.excerpt)}
                      <div className="blog-link">
                        <Link to={`/blog/post/${post.slug}`} className="btn-link">
                          Leer más
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              
              <nav className="navigation pagination" role="navigation">
								<h2 className="screen-reader-text">Posts navigation</h2>
								<div className="nav-links">
									{!first ?
                    <Link className="prev page-numbers" to={`/blog/${previousUrl}`}>
                      <i className="fa fa-chevron-left"/>
                      <span className="screen-reader-text">Previous page</span>
                    </Link>
                    : null}
                  {Array.from({ length: pageCount }).map((_, i) => {
                    return i + 1 !== index ?
                    <Link key={i} className="page-numbers" to={`/blog/${i + 1 === 1 ? '' : i + 1}`}>
                      <span className="meta-nav screen-reader-text">Page </span>
                      {i + 1}
                    </Link>
                    :
                    <span key={i} className="page-numbers current">
                      <span className="meta-nav screen-reader-text">Page </span>
                      {i + 1}
                    </span>
                  })}
                  {!last ?
                    <Link className="next page-numbers" to={`/blog/${nextUrl}`}>
                      <span className="screen-reader-text">Next page</span>
                      <i className="fa fa-chevron-right"/>
                    </Link>
                    : null}
								</div>
							</nav>
            </main>

            <aside className="col-lg-5 col-xl-4 order-lg-1">
              <div className="categories-dropdown">
                <div className="widget widget_categories dropdown">
                  <h3 className="widget-title">Categories</h3>

                  <form action="/">
                    <label className="screen-reader-text" htmlFor="cat">
                      Categories dropdown
                    </label>
                    <select name="cat" id="cat" className="postform">
                      <option value="-1">Select Category</option>
                      <option className="level-0" value="3">
                        Corporate
                      </option>
                      <option className="level-0" value="4">
                        Business
                      </option>
                      <option className="level-0" value="5">
                        Entertainment
                      </option>
                      <option className="level-0" value="6">
                        Innovations
                      </option>
                      <option className="level-0" value="8">
                        News
                      </option>
                      <option className="level-0" value="9">
                        Knowledge
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    
    </Layout>
  )
}

export default Blog;
