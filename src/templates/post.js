import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Post = () => {
  return (
    <Layout location="/blog" sectionTitle="blog">
      <Head title="blog" />
      <section className="ls s-pt-50 s-pb-130 c-gutter-60 post5">
        <div className="container">
          <div className="row">
            <div class="d-none d-lg-block divider-65"></div>
            <article class="vertical-item post type-post status-publish format-standard has-post-thumbnail">
              <div className="post-thumb">
                <img src="images/gallery/08.jpg" alt />
              </div>
              <div className="item-content hero-bg blog-post">
                <div className="entry-content">
                  <p>
                    Stet clita kasd gubergren, no takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr. Sed diam nonumy eirmod tempor invidunt.
                    Labore et dolore magna aliquyam erat. Suspendisse ac neque
                    feugiat. I highly recommend this company for all and any of
                    your design needs. I am very happy with the new redesigned
                    and restructured website they built for my moving company!
                    At vero eos et accusam et justo duo dolores et ea rebum.
                  </p>
                  <blockquote>
                    <p className="font-italic">
                      "I highly recommend this company for all and any of your
                      design needs. I am very happy with the new redesigned and
                      restructured website they built for my moving company!"
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque condimentum lobortis accumsan. Nulla nec magna
                    vitae enim viverra iaculis. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Curabitur velit nibh, facilisis porttitor eros vel,
                    pulvinar consectetur diam. Nunc at finibus mi. Aliquam risus
                    nisl, auctor et placerat id, dapibus id arcu. Ut eu
                    ullamcorper ante. At vero eos et accusam et justo duo
                    dolores et ea rebum.
                  </p>
                  <div className="media-item images-item">
                    <div className="row c-mb-10 c-gutter-10">
                      <div className="col-6 col-md-4">
                        <img src="images/gallery/01.jpg" alt />
                      </div>
                      <div className="col-6 col-md-4">
                        <img src="images/gallery/02.jpg" alt />
                      </div>
                      <div className="col-6 col-md-4">
                        <img src="images/gallery/03.jpg" alt />
                      </div>
                      <div className="col-6 col-md-4">
                        <img src="images/gallery/04.jpg" alt />
                      </div>
                      <div className="col-6 col-md-4">
                        <img src="images/gallery/05.jpg" alt />
                      </div>
                      <div className="col-6 col-md-4">
                        <img src="images/gallery/06.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <p>
                    Donec vel sapien ac nibh accumsan dignissim. Nam rutrum
                    lectus vel est bibendum, nec convallis sem finibus. Donec
                    dictum metus ac orci volutpat porta et id nisl. Etiam
                    gravida lobortis mauris nec tincidunt. Nam at facilisis mi.
                    Etiam congue eleifend dolor, ac tempus dolor interdum at.
                    Nullam luctus lorem lectus, eu luctus eros tincidunt eu.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam risus nisl,
                    auctor et placerat id, dapibus id arcu.
                  </p>
                </div>
                <div className="list-block">
                  <div className="wrap">
                    <ol className="list3">
                      <li>Lorem ipsum dolor sit amet, consetetur</li>
                      <li>Sadipscing elitr, sed diam nonumy eirmod</li>
                      <li>Tempor invidunt ut labore et dolore</li>
                      <li>Magna aliquyam erat, sed diam voluptua</li>
                      <li>At vero eos et accusam et justo duo</li>
                      <li>Stet clita kasd gubergren no sea takimata </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="entry-meta ds with_padding">
                <div className="entry-avatar">
                  <img src="images/team/04.jpg" alt />
                </div>
                <div className="entry-author">
                  <span className="author vcard">
                    <a className="url fn n" href="post1.html">
                      admin
                    </a>
                  </span>
                </div>
                {/* .entry-author */}
                <div>
                  <i className="fa fa-calendar color-main fs-14" />
                  <time dateTime="2017-06-10T10:14:59+00:00">10.06.17</time>
                </div>
                {/* .entry-date */}
                <div className="blog-adds">
                  <span>
                    <i className="fa fa-eye color-main fs-14" />
                    <span>126</span>
                  </span>
                  <span>
                    <i className="fa fa-comments color-main fs-14" />
                    <span>3</span>
                  </span>
                  <span>
                    <i className="fa fa-heart color-main fs-14" />
                    <span>0</span>
                  </span>
                </div>
                <div className="tags">
                  <span>
                    <i className="fa fa-tags color-main fs-14" />
                    tags:
                  </span>
                  <a className="tags" href="post1.html">
                    Branding
                    <span>,</span>
                  </a>
                  <a className="tags" href="post1.html">
                    Design
                    <span>,</span>
                  </a>
                  <a className="tags" href="post1.html">
                    Photo
                  </a>
                </div>
                <div className="entry-blog-share text-right">
                  <a href="#">
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
