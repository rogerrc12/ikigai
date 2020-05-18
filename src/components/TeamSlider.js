import React, { useRef } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"

const TeamSlider = () => {
  const { wordpress: { equipo: { nodes: team } } } = useStaticQuery(graphql`
    {
      wordpress {
      equipo(where: {orderby: {field: DATE, order: ASC}}) {
          nodes {
            details { photo { altText sourceUrl(size: LARGE) } ocupation fullName }
          }
        }
      }
    }
  `);

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
          <p>{team[i].details.fullName}</p>
          <span className="position">
            {team[i].details.ocupation}
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
          {team.map((user, i) => (
            <div className="ls" key={i}>
              <img src={user.details.photo.sourceUrl} alt={user.details.photo.altText} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TeamSlider
