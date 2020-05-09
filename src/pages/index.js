import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import TeamSlider from "../components/TeamSlider";
import Services from '../components/Services';
import Steps from '../components/Steps';
import VerticalLine from "../assets/img/vertical_line.png"
import VerticalLine2 from "../assets/img/vertical_line2.png"
import DarkLineShort from "../assets/img/dark_line_short.png"
import PinkLine from "../assets/img/pink_line_big.png"
import { graphql, Link } from "gatsby";

export const squareImage = graphql`
  fragment ServiceImage on File {
    childImageSharp {
      original {
        src
      }
    }
  }
`

export const query = graphql`
  query {
    book1: file(relativePath: { eq: "book-1.png" }) {
      ...ServiceImage
    }
    book2: file(relativePath: { eq: "book-2.png" }) {
      ...ServiceImage
    }
    book3: file(relativePath: { eq: "book-3.png" }) {
      ...ServiceImage
    }
    icon1: file(relativePath: { eq: "icon1.png" }) {
      ...ServiceImage
    }
    icon2: file(relativePath: { eq: "icon2.png" }) {
      ...ServiceImage
    }
    icon3: file(relativePath: { eq: "icon3.png" }) {
      ...ServiceImage
    }
  }
`

const IndexPage = ({ data }) => {
  
  console.log(data)
  return (
    <Layout location="/">
      <Head title="Agencia onmicanal" />

      {/* Slide Section */}
      <section className="page_slider main_slider corner-bottom static">
        <div className="flexslider" data-nav="true" data-dots="false">
          <div className="ds text-left">
            <span className="flexslider-overlay" />
            <span className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.youtube.com/embed/gY4fETApNh4?feature=oembed&showinfo=0&autoplay=1&controls=0&mute=1&loop=1&playlist=gY4fETApNh4"
                allowFullScreen
                title="presentation"
              />
            </span>
            <div className="container">
              <div className="row">
                <div className="col-12 itro_slider">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div
                        className="intro_layer animate"
                        data-animation="fadeInDown"
                      >
                        <h2 className="text-uppercase intro_featured_word">
                          Agencia de Marketing
                        </h2>
                      </div>
                      <div
                        className="intro_layer animate"
                        data-animation="fadeInUp"
                      >
                        <h2 className="text-uppercase intro_featured_word name">
                          Digital
                        </h2>
                      </div>
                      <div
                        className="intro_layer animate"
                        data-animation="fadeIn"
                      >
                        <p className="text-uppercase intro_after_featured_word">
                          Cumpliendo tus propósitos
                        </p>
                      </div>
                      <div
                        className="intro_layer page-bottom animate"
                        data-animation="pullDown"
                      >
                        <Link className="btn btn-maincolor" to="/contact">
                          Comencemos
                        </Link>
                      </div>
                    </div>
                    {/* eof .intro_layers */}
                    <div className="intro-layer  z-index-10">
                      <div className="slide-social-icons float-right">
                        <div className="animate" data-animation="fadeInDown">
                          <a href="https://www.facebook.com">
                            <i className="fa fa-facebook" />
                          </a>
                        </div>
                        <div className="animate" data-animation="fadeInDown">
                          <a href="https://www.linkedin.com/">
                            <i className="fa fa-linkedin" />
                          </a>
                        </div>
                        <div className="animate" data-animation="fadeInDown">
                          <a href="https://www.instagram.com/">
                            <i className="fa fa-instagram last" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* eof .intro_layers_wrapper */}
                </div>
                {/* eof .col-* */}
                <div className="flexslider-bottom d-none d-xl-block">
                  <a href="#about">
                    <i className="mouse-button animated floating" />
                  </a>
                </div>
              </div>
              {/* eof .row */}
            </div>
            {/* eof .container */}
          </div>
        </div>
        {/* eof flexslider */}
      </section>
      <div className="divider-10 d-block d-sm-none" />

      {/* About Home */}
      <section
        className="s-pt-30 s-pt-lg-50 s-pt-xl-25 ls about-home"
        id="about"
      >
        <div className="divider-5 d-none d-xl-block" />
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="main-content text-center">
                <div className="img-wrap text-center">
                  <img src={VerticalLine} alt="vertical line" />
                  <div className="divider-35" />
                </div>
                <h5>
                  Nuestro Ikigai: <br /> “Es hacer que el usuario te encuentre a ti en vez de ir a buscarlo”.
                </h5>
                <p>
                  Estar en internet es fácil!, pero tener éxito es otra historia. 
                  Necesitaras de verdaderos <strong>expertos</strong> que te lleven de la mano. 
                  Con nuestro profesionales en ventas, marketing y programación 
                  tendrás estrategias claras y soluciones de inbound marketing adaptadas, haciendo que tu éxito sea inevitable.
                </p>
                <div className="divider-30" />
                <div className="img-wrap text-center">
                  <img src={VerticalLine} alt="vertical line" />
                </div>
                <div>
                  <div className="divider-40" />
                  <button type="button" className="btn btn-outline-maincolor">
                    Comencemos
                  </button>
                  <div className="divider-40" />
                </div>
                <div className="img-wrap text-center">
                  <img src={VerticalLine} alt="vertical line" />
                </div>
                <div className="divider-10 d-none d-xl-block" />
              </div>
            </div>
          </div>
        </div>
        <div className="divider-10 d-block d-sm-none" />
      </section>

      {/* services home */}
      <section
        className="s-pt-30 s-pb-3 service-item2 ls animate"
        id="services"
        data-animation="fadeInUp"
      >
        <div className="container">
          <div className="row c-mb-50 c-mb-md-60">
            <div className="d-none d-lg-block divider-20" />
            <Services />
          </div>
          <div className="pink-line text-center">
            <img src={PinkLine} alt="pink line" />
          </div>
        </div>
      </section>

      {/* process home */}
      <section
        className="s-pt-100 s-pt-lg-130 ds process-part skew_right s-parallax top_white_line_big overflow-visible"
        id="steps"
      >
        <div className="container">
          <div className="divider-65" />
          <Steps />
          
          <div className="divider-10 d-block d-sm-none" />
          <div className="img-wrap text-center">
            <img src={VerticalLine2} alt="vertical line" />
          </div>
          <div className=" white-button text-center">
            <Link className="btn white-btn" to="/services">
              Comencemos
            </Link>
          </div>
          <div className="divider-30 d-none d-xl-block" />
        </div>
      </section>

      {/* Team Slider Home */}
      <section className="page_slider team_slider" id="team">
        <div className="container-fluid">
          <TeamSlider />
        </div>
      </section>
      
      {/* Let's get started */}
      <section className="s-pt-130 s-pt-md-50 ls text-section">
        <div className="divider-30" />
        <div className="container">
          <div className="row">
            <div className="text-center col-md-12 justify-content-center text-block">
              <img src={VerticalLine} alt="vertical Line" />
              <div className="divider-35" />
              <div className="content">
                <h1>
                  Empecemos
                  <br /> a cumplir tu propósito
                </h1>
                <p>Te llevaremos de la mano en un recorrido exitoso</p>
                <div className="divider-30" />
              </div>
              <img src={VerticalLine} alt="vertical Line" />
              <div>
                <div className="divider-40" />
                <a href="/" className="btn btn-outline-maincolor">
                  Let’s Talk!
                </a>
                <div className="divider-30" />
              </div>
              <div className="img-wrap overflow-visible">
                <img src={VerticalLine} alt="vertical Line" />
                <div className="divider-5 d-none d-xl-block" />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* Blog posts home */}
      <section className="ls ms book-item s-pb-30 s-pb-lg-25">
        <div className="corner corner-light" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="text-block text-center">
                <div className="img-wrap text-center">
                  <img src={VerticalLine} alt="vertical line" />
                  <div className="divider-35" />
                </div>
                <h5>
                  Cada fuente de actualización sobre el mundo digital es importante.
                </h5>
                <p>
                  Las personas viven e interactúan constantemente con la tecnología a diario,
                  saber sus usos y avances presenta una serie de beneficios que permiten a las organizaciones,
                  de todo tamaño, crecer, consolidarse y estar en donde antes era imposible llegar. <br />
                  Descubre con nosotros la nueva era de la comunicación.
                </p>
                <div className="divider-30" />
                <div className="img-wrap text-center">
                  <img src={VerticalLine} alt="vertical line" />
                </div>
              </div>
            </div>
            <div className="divider-40" />
            <div className="row c-gutter-30 c-mb-30 c-mb-lg-0 text-center book">
              <div className="col-12 col-lg-4">
                <div className="stage book-1 ls">
                  <img src={data.book1.childImageSharp.original.src} alt="#" />
                  <div className="info">
                    <header>
                      <h6>
                        <a href="/">
                          Annual Report
                          <br />
                          2017-2018
                        </a>
                      </h6>
                    </header>
                    <p>
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="stage book-2 ds">
                  <img src={data.book2.childImageSharp.original.src} alt="#" />
                  <div className="info">
                    <header>
                      <h6>
                        <a href="/">Tools of Trading: Modern Marketing</a>
                      </h6>
                    </header>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam numy eirmod.
                    </p>
                    <p className="small-text link-a">
                      <a href="/">Buy It Now!</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="stage book-3 ls">
                  <img src={data.book3.childImageSharp.original.src} alt="#" />
                  <div className="info">
                    <header>
                      <h6>
                        <a href="/">Business Magazine: Design</a>
                      </h6>
                    </header>
                    <p>
                      Et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren.
                    </p>
                    <p className="small-text link-a">
                      <a href="/">Buy It Now!</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-30" />
          </div>
          <div className="divider-10" />
        </div>
      </section>
  
      {/* Mini contact */}
      <section
        className="s-pt-50 s-pb-100 s-pt-lg-30 s-pb-lg-75 ls ms teaser-contact-icon main-icon s-parallax"
        id="contact"
      >
        <div className="corner corner-inverse" />
        <div className="container">
          <div className="divider-10 d-none d-xl-block" />
          <div className="row c-mb-50 c-mb-lg-0">
            <div className="col-lg-4 text-center">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon1.childImageSharp.original.src}
                    alt="icon"
                  />
                </div>
              </div>
              <h6>Call Us</h6>
              <p>
                <strong>New Accounts:</strong> 1-800-123-4567
                <br />
                <strong>Support:</strong> 1-800-123-4569
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon3.childImageSharp.original.src}
                    alt="icon"
                  />
                </div>
              </div>
              <h6>Write Us</h6>
              <p>
                example@example.com
                <br /> example@example.com
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="border-icon">
                <div className="teaser-icon">
                  <img
                    src={data.icon2.childImageSharp.original.src}
                    alt="icon"
                  />
                </div>
              </div>
              <h6>Visit Us</h6>
              <p>
                2231 Sycamore Lake Road
                <br /> Green Bay, WI 54304
              </p>
            </div>
          </div>
          <div className="divider-30 d-none d-lg-block" />
          <div className="text-center img-wrap col-md-12 layout-2">
            <img src={DarkLineShort} alt="dark line" />
          </div>
        </div>
        <div className="divider-10" />
      </section>

    </Layout>
  )
}

export default IndexPage
