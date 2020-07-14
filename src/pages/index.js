import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
// import TeamSlider from "../components/TeamSlider";
import Services from '../components/Services';
import Steps from '../components/Steps';
import MiniContact from '../components/MiniContact';
import parser from 'html-react-parser';
import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import VerticalLine from "../assets/img/vertical_line.png"
import VerticalLine2 from "../assets/img/vertical_line2.png"
import PinkLine from "../assets/img/pink_line_big.png"
import BGVIdeoMp4 from '../assets/videos/background-video.mp4';
import BgVIdeoWebm from '../assets/videos/background-video.webm';
import { graphql, Link } from "gatsby";
import Moment from "react-moment"

export const query = graphql`
  {
      wordpress {
        posts(first: 3) {
          nodes { title excerpt date slug
            featuredImage { sourceUrl(size: MEDIUM_LARGE) altText }
            author { name avatar { url } }
          }
        }
      }
  }
`;

const IndexPage = ({ data }) => {
  const { wordpress: { posts: { nodes: posts } } } = data;
  
  return (
    <Layout location="/">
      <Head title="Agencia de Marketing Digital" />

      {/* Slide Section */}
      <section className="page_slider main_slider home_slider">
        <div className="flexslider" data-nav="true" data-dots="false">
          <div className="ds text-center">
            <span className="flexslider-overlay" />
            <span className="embed-responsive embed-responsive-16by9">
              <video muted autoPlay loop>
                <source src={BGVIdeoMp4} type="video/mp4" />
                <source src={BgVIdeoWebm} type="video/webm" />
              </video>
            </span>
            <div className="container">
              <div className="row">
                <div className="col-12 intro_slider">
                  <Fade big delay={200}>
                    <p className="text-uppercase intro_after_featured_word">Ikigai Marketer</p>
                  </Fade>
                  
                  <Fade right delay={700} duration={1300}>
                    <h2 className="text-uppercase intro_featured_word" data-sal="slide-right">
                      Marketing Digital
                    </h2>
                  </Fade>
                  
                  <Fade bottom delay={1000}>
                    <h3 className="intro_before_featured_word">
                      <span className="color-main1">Web Design</span>,{" "}
                      <span className="color-main2">Marketing</span> &{" "}
                      <span className="color-main3">Branding</span>
                    </h3>
                  </Fade>
                  
                    <div className="intro_layer page-bottom">
                      <Link className="btn btn-maincolor" to="/services">Comencemos</Link>
                    </div>
            
                </div>
            
              </div>
            
            </div>
            
          </div>
          
        </div>
        {/* eof flexslider */}
        
          <div className="flexslider-bottom d-none d-md-block">
            <Pulse delay={1600} forever>
              <span className="mouse-button" />
            </Pulse>
          </div>
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
                  Nuestro Ikigai: <br /> “Es conectar tu marca con tus clientes”.
                </h5>
                <p>
                  ¿Ya tu marca está en internet? Sí es así, ya has dado el primer paso en un largo e interesante camino, 
                  ahora, no tienes que hacerlo solo, te invito a que el resto del camino lo hagamos juntos,
                  cumpliendo tus objetivos para el posicionamiento de tu marca.
                </p>
                <div className="divider-30" />
                <div className="img-wrap text-center">
                  <img src={VerticalLine} alt="vertical line" />
                </div>
                <div>
                  <div className="divider-40" />
                  <h5>Como lo hacemos</h5>
                  <div className="divider-40" />
                </div>
                <div className="divider-10 d-none d-xl-block" />
              </div>
            </div>
          </div>
        </div>
        <div className="divider-10 d-block d-sm-none" />
      </section>

      {/* process home */}
      <section
        className="s-pt-100 mb-5 s-pt-lg-130 ds process-part skew_right s-parallax top_white_line_big overflow-visible"
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
            <a className="btn white-btn" href="https://wa.me/51918371703?text=Estoy%20interesado%20en%20sus%20servicios"
               target="_blank" rel="noopener noreferrer">
              ¡Quiero contactarlos!
            </a>
          </div>
          <div className="divider-30 d-none d-xl-block" />
        </div>
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
          
          {/* <div className="pink-line text-center">
            <img src={PinkLine} alt="pink line" />
          </div> */}
        </div>
      </section>

      {/* Team Slider Home */}
      {/* <section className="page_slider team_slider" id="team">
        <div className="container-fluid">
          
          <TeamSlider />
          
        </div>
      </section> */}
      
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
                <a href="https://wa.me/51918371703?text=Estoy%20interesado%20en%20sus%20servicios"
                   target="_blank" rel="noopener noreferrer" className="btn btn-outline-maincolor">
                  ¡Quiero contactarlos!
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

            <div className="row">
              <div className="col-lg-12 blog-featured-posts">
                <div className="row justify-content-center">
                  {posts.map(post => (
                    <div className="col-xl-4 col-md-6" key={post.date}>
                      <article
                        className="vertical-item text-center content-padding padding-small ls ms post type-post status-publish format-standard has-post-thumbnail blog-featured-posts">
                        <div className="item-media post-thumbnail">
                          <Link to={'/blog/post/' + post.slug}>
                            <img src={post.featuredImage.sourceUrl} alt={post.featuredImage.altText} />
                          </Link>
                        </div>
                        {/* post-thumbnail */}
                        <div className="item-content">
                          <header className="entry-header">
                            <div className="entry-meta">
                              <span className="screen-reader-text">Creado en</span>
                              <Link to={'/blog/post/' + post.slug}>
                                <time className="entry-date published updated" dateTime={post.date}>
                                  <Moment format="DD-MM-YYYY">{post.date}</Moment>
                                </time>
                              </Link>
                            </div>
                            {/* entry-meta */}
                            <h6 className="entry-title">
                              <Link to={'/blog/post/' + post.slug}>
                                {post.title}
                              </Link>
                            </h6>
                          </header>
                          {/* entry-header */}

                          <div className="entry-content">
                            {parser(post.excerpt.substring(0 , 100) + '...')}
                          </div>
                          {/* entry-content */}
                          <div className="post-author small-text">
                            <img src={post.author.avatar.url} alt={post.author.name} />
                            <p>{post.author.name}</p>
                          </div>
                        </div>
                        {/* item-content */}
                      </article>
                      {/* #post-## */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center col-md-12 justify-content-center text-block">
            <img src={VerticalLine} alt="vertical Line" />
          </div>
        </div>
      </section>
      
      <MiniContact />

    </Layout>
  )
}

export default IndexPage
