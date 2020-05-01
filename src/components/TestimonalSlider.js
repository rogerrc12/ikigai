import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import parser from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"

const TestimonalSlider = () => {
  const {
    wordpress: {
      testimonios: { nodes: testimonios },
    },
  } = useStaticQuery(graphql`
    {
      wordpress {
        testimonios {
          nodes {
            title
            info {
              clientImage {
                sourceUrl
                altText
              }
              company
            }
            content
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
  }

  return (
    <Slider {...settings} className="owl-carousel testimonials-owl">
      {testimonios.map((testimonio, i) => (
        <div className="quote-item" key={i}>
          <div className="quote-image">
            <img
              src={testimonio.info.clientImage.sourceUrl}
              alt={testimonio.info.clientImage.altText}
            />
          </div>
          <p className="small-text author-job">{testimonio.info.company}</p>
          <h5>{testimonio.title}</h5>
          {parser(testimonio.content)}
        </div>
      ))}
    </Slider>
  )
}

export default TestimonalSlider
