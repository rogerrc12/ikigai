import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import MiniContact from "../components/MiniContact";

const Contact = ({ data }) => {
  return (
    <Layout location="/contact" sectionTitle="Contáctanos">
      <Head title="Contacto" />
      
      <MiniContact />

      <section className="ls support-section s-py-10 s-py-lg-100 s-py-xl-130 text-md-center text-lg-left">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <h1>Contáctanos</h1>
              <p>
                Obten ayuda para elegir cualquiera de nuestros servicios. 
                Llegamos a toda <strong>America Latina, USA y Europa</strong>.
              </p>
              <h6>
                Atención inmediata en nuestros canales:
              </h6>
              <a href="https://wa.me/51918371703?text=Estoy%20interesado%20en%20sus%20servicios"
                 target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-maincolor3" style={{marginRight: '15px'}}>
                Whatsapp
              </a>
              <button type="button" className="btn btn-outline-maincolor">
                Chat online
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
