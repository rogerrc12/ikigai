import React from "react"
import { Tabs } from "antd"
import "antd/dist/antd.css"
import { graphql, useStaticQuery } from "gatsby"
const { TabPane } = Tabs

const Tab = ({ name }) => <span className="portfolio-tab">{name}</span>

const PortfolioGallery = () => {
  const data = useStaticQuery(graphql`
    {
      web1: file(relativePath: { eq: "gallery/web01.jpg" }) {
        childImageSharp { original { src } }
      }

      web2: file(relativePath: { eq: "gallery/web02.jpg" }) {
        childImageSharp { original { src } }
      }
        
      media1: file(relativePath: { eq: "gallery/media01.jpg" }) {
          childImageSharp { original { src } }
      }
        
      media2: file(relativePath: { eq: "gallery/media02.jpg" }) {
          childImageSharp { original { src } }
      }

      graphic1: file(relativePath: { eq: "gallery/graphic1.jpg" }) {
          childImageSharp { original { src } }
      }

      graphic2: file(relativePath: { eq: "gallery/graphic2.jpg" }) {
          childImageSharp { original { src } }
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
                  src={data.web1.childImageSharp.original.src}
                  alt="Portfolio 1"
                />
                <div className="media-links"/>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href="https://pagoinsibs.com" target="_blank" rel="noopener noreferrer">
                    Pago INSIBS
                  </a>
                  <br />
                  <a href="https://pagoinsibs.com" target="_blank" rel="noopener noreferrer">Desarrollo de plataforma web de cobranza con administración</a>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-sm-6 advertisement branding">
            <div className="vertical-item item-gallery content-absolute gallery text-center ls">
              <div className="item-media">
                <img
                  src={data.web2.childImageSharp.original.src}
                  alt="Portfolio 2"
                />
                <div className="media-links"/>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href="https://megaplomerias.cl" target="_blank" rel="noopener noreferrer">
                    Megaplomerias
                  </a>
                  <br />
                  <a href="https://megaplomerias.cl" target="_blank" rel="noopener noreferrer">Creación de sitio web profesional con interacción para citas.</a>
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
                  src={data.graphic1.childImageSharp.original.src}
                  alt="Portfolio 1"
                />
                <div className="media-links"/>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href={data.graphic1.childImageSharp.original.src} target="_blank" rel="noopener noreferrer">
                    Miami Arts & Technology
                  </a>
                  <br />
                  <a href={data.graphic1.childImageSharp.original.src} target="_blank" rel="noopener noreferrer">
                    Diseño y creación de logo
                  </a>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-sm-6 advertisement branding">
            <div className="vertical-item item-gallery content-absolute gallery text-center ls">
              <div className="item-media">
                <img
                  src={data.graphic2.childImageSharp.original.src}
                  alt="Portfolio 2"
                />
                <div className="media-links"/>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href={data.graphic2.childImageSharp.original.src} target="_blank" rel="noopener noreferrer">
                    Imágenes Gráficas
                  </a>
                  <br />
                  <a href={data.graphic2.childImageSharp.original.src} target="_blank" rel="noopener noreferrer">
                    Creación de imagen corporativa
                  </a>
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
                  src={data.media1.childImageSharp.original.src}
                  alt="Instakash"
                />
                <div className="media-links"/>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href="https://www.instagram.com/instakashnet/" target="_blank" rel="noopener noreferrer">
                    Instakash
                  </a>
                  <br />
                  <a href="https://www.instagram.com/instakashnet/" target="_blank" rel="noopener noreferrer">Administración de perfil empresarial</a>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-sm-6 advertisement branding">
            <div className="vertical-item item-gallery content-absolute gallery text-center ls">
              <div className="item-media">
                <img
                  src={data.media2.childImageSharp.original.src}
                  alt="Portfolio 2"
                />
                <div className="media-links"/>
              </div>
              <div className="item-content">
                <h6>
                  <a className="tags small-text" href="https://www.facebook.com/Satcell.us/" target="_blank" rel="noopener noreferrer">
                    Satcell US
                  </a>
                  <br />
                  <a href="https://www.facebook.com/Satcell.us/" target="_blank" rel="noopener noreferrer">Crecimiento de fan page Satcell</a>
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
