import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout sectionTitle="No encontrado">
    <Head title="404: Not found" />

    <section className="ls s-pt-50 s-pb-100 error-404 not-found page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <header className="page-header not-found__header">
              <h1>
                Oops, No se ha encontrado la página que buscas...
              </h1>
            </header>
            {/* .page-header */}
            <div className="page-content">
              <p>
                <Link to="/" className="btn btn-maincolor">Volver al inicio</Link>
              </p>
            </div>
            {/* .page-content */}
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block divider-120" />
    </section>

  </Layout>
)

export default NotFoundPage;
