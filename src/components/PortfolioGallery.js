import React from "react"
import { Tabs } from "antd"
import "antd/dist/antd.css"
import { graphql, useStaticQuery } from "gatsby"
const { TabPane } = Tabs

const Tab = ({ name }) => <span className="portfolio-tab">{name}</span>

const PortfolioGallery = () => {
  const data = useStaticQuery(graphql`
    {
      portfolio1: file(relativePath: { eq: "gallery/01.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }

      portfolio2: file(relativePath: { eq: "gallery/02.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab={<Tab name="Desarrollo web" />} key="1">
        <div className="row portfolio-gallery">
          <div className="col-xl-6 col-sm-6 web-design design">
            <div className="vertical-item item-gallery content-absolute gallery text-center ls">
              <div className="item-media">
                <img
                  src={data.portfolio1.childImageSharp.original.src}
                  alt="Portfolio 1"
                />
                <div className="media-links"></div>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href="/gallery-item.html">
                    Photo
                  </a>
                  <br />
                  <a href="/gallery-item.html">Lorem ipsum dolor sit</a>
                </h6>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-sm-6 advertisement branding">
            <div class="vertical-item item-gallery content-absolute gallery text-center ls">
              <div class="item-media">
                <img
                  src={data.portfolio2.childImageSharp.original.src}
                  alt="Portfolio 2"
                />
                <div class="media-links"></div>
              </div>
              <div class="item-content">
                <h6>
                  <a class="tags small-text" href="/gallery-item.html">
                    Photo
                  </a>
                  <br />
                  <a href="/gallery-item.html">Amet consetetur sadip</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane tab={<Tab name="Diseño gráfico" />} key="2">
        <div className="row portfolio-gallery">
          <div className="col-xl-6 col-sm-6 web-design design">
            <div className="vertical-item item-gallery content-absolute gallery text-center ls">
              <div className="item-media">
                <img
                  src={data.portfolio1.childImageSharp.original.src}
                  alt="Portfolio 1"
                />
                <div className="media-links"></div>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href="/gallery-item.html">
                    Photo
                  </a>
                  <br />
                  <a href="/gallery-item.html">Lorem ipsum dolor sit</a>
                </h6>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-sm-6 advertisement branding">
            <div class="vertical-item item-gallery content-absolute gallery text-center ls">
              <div class="item-media">
                <img
                  src={data.portfolio2.childImageSharp.original.src}
                  alt="Portfolio 2"
                />
                <div class="media-links"></div>
              </div>
              <div class="item-content">
                <h6>
                  <a class="tags small-text" href="/gallery-item.html">
                    Photo
                  </a>
                  <br />
                  <a href="/gallery-item.html">Amet consetetur sadip</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane tab={<Tab name="Social media" />} key="3">
        <div className="row portfolio-gallery">
          <div className="col-xl-6 col-sm-6 web-design design">
            <div className="vertical-item item-gallery content-absolute gallery text-center ls">
              <div className="item-media">
                <img
                  src={data.portfolio1.childImageSharp.original.src}
                  alt="Portfolio 1"
                />
                <div className="media-links"></div>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href="/gallery-item.html">
                    Photo
                  </a>
                  <br />
                  <a href="/gallery-item.html">Lorem ipsum dolor sit</a>
                </h6>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-sm-6 advertisement branding">
            <div class="vertical-item item-gallery content-absolute gallery text-center ls">
              <div class="item-media">
                <img
                  src={data.portfolio2.childImageSharp.original.src}
                  alt="Portfolio 2"
                />
                <div class="media-links"></div>
              </div>
              <div class="item-content">
                <h6>
                  <a class="tags small-text" href="/gallery-item.html">
                    Photo
                  </a>
                  <br />
                  <a href="/gallery-item.html">Amet consetetur sadip</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
  )
}

export default PortfolioGallery
