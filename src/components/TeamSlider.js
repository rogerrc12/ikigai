import React, { useRef } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"

const TeamSlider = () => {
  const data = useStaticQuery(graphql`
    {
      team1: file(relativePath: { eq: "team/team_slide_01.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
        name
      }
      team2: file(relativePath: { eq: "team/team_slide_02.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
        name
      }
      team3: file(relativePath: { eq: "team/team_slide_02.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
        name
      }
      team4: file(relativePath: { eq: "team/team_slide_04.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
        name
      }
    }
  `)

  const sliderRef = useRef()

  const settings = {
    dots: true,
    dotsClass: "flexslider-controls",
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    appendDots: dots => (
      <div>
        <ul className="flex-control-nav-1">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <ul>
        <li className="menu_item">
          {data[`team${i + 1}`].name}
          <span className="position" style={{ marginLeft: "10px" }}>
            Marketer
          </span>
        </li>
      </ul>
    ),
  }
  return (
    <div className="shortcode-team-slider main-team">
      <h3 className="slider-title">Team</h3>
      <div className="flexslider team-slider">
        <Slider
          {...settings}
          className="slides"
          ref={s => (sliderRef.current = s)}
        >
          <div className="ls">
            <img src={data.team1.childImageSharp.original.src} alt="team 1" />
          </div>
          <div className="ls">
            <img src={data.team2.childImageSharp.original.src} alt="team 2" />
          </div>
          <div className="ls">
            <img src={data.team3.childImageSharp.original.src} alt="team 3" />
          </div>
          <div className="ls">
            <img src={data.team4.childImageSharp.original.src} alt="team 4" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default TeamSlider
