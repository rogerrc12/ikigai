import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const data = useStaticQuery(graphql`
    {
      slide1: file(relativePath: { eq: "slide_01.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      slide2: file(relativePath: { eq: "slide_02.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      slide3: file(relativePath: { eq: "slide_03.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  return (
    <div className="flexslider">
      <Slider {...settings} className="slides">
        <div className="ds slide slide01">
          <img src={data.slide1.childImageSharp.original.src} alt="slide 1" />

          <div className="slide-content">
            <h4 className="text-uppercase fw-400">Bienvenido a</h4>
            <h2 className="text-uppercase text-center">Ikigai Marketer</h2>
            <p>
              <span className="color-main3">Marketing </span> &amp;
              <span className="color-main4"> Propósito</span>
            </p>
          </div>
        </div>

        <div className="cs slide slide02">
          <img src={data.slide2.childImageSharp.original.src} alt="slide 2" />

          <div className="slide-content">
            <p className="text-lowercase">Soluciones</p>
            <h2 className="text-uppercase">Inbound</h2>
            <h4 className="text-uppercase">Marketing</h4>
          </div>
        </div>

        <div className="ds slide slide03">
          <img src={data.slide3.childImageSharp.original.src} alt="slide 3" />

          <div className="slide-content">
            <h3 className="text-uppercase text-center">
              <span className="before fw-100">canales</span>
              <br />
              <span className="fw-300 prev"> correctos para</span>
              <br />
              <span className="fw-600">mensajes estratégicos</span>
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default BlogSlider
