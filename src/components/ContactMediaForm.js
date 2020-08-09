import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import "ldbutton/dist/ldbtn.min.css";
import "../assets/css/loading.min.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const validations = Yup.object({
  name: Yup.string().required("Debes colocar tu nombre."),
  email: Yup.string().required("Debes colocar un correo.").email("Coloca un correo válido."),
  phone: Yup.string()
    .required("Debes colocar tu teléfono.")
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, "Coloca un telêfono válido."),
});

const ContactMediaForm = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);
    const body = JSON.stringify([[values.name, values.email, values.phone]]);
    const config = { method: "POST", body, headers: { "Content-Type": "application/json" } };
    console.log(`${process.env.GOOGLE_SHEETS_URL}?tabId=Prospectos`);
    try {
      const response = await (await fetch(`${process.env.GOOGLE_SHEETS_URL}?tabId=Prospectos`, config)).json();

      setIsLoading(false);
      if (response.message.includes("Success")) {
        setSent(true);
      } else {
        setSent(false);
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setSent(false);
      setError(true);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validations} onSubmit={onSubmit}>
      {({ isValid, errors, touched }) => (
        <Form>
          <div className="form-group">
            <Field
              type="text"
              name="name"
              placeholder="Nombre completo"
              className={errors.name && touched.name ? "error" : ""}
            />
            <ErrorMessage name="name">{(message) => <span className="error">{message}</span>}</ErrorMessage>
          </div>
          <div className="form-group">
            <Field
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className={errors.email && touched.email ? "error" : ""}
            />
            <ErrorMessage name="email">{(message) => <span className="error">{message}</span>}</ErrorMessage>
          </div>
          <div className="form-group">
            <Field
              type="text"
              name="phone"
              placeholder="Número de teléfono"
              className={errors.phone && touched.phone ? "error" : ""}
            />
            <ErrorMessage name="phone">{(message) => <span className="error">{message}</span>}</ErrorMessage>
          </div>
          {error && (
            <p className="sent-error">Ha ocurrido un error enviando tu solicitud. Por favor, intentalo más tarde</p>
          )}
          {!sent ? (
            <button
              type="submit"
              className={`ld-ext-right ${isLoading ? "running" : ""}`}
              disabled={!isValid || isLoading}
            >
              Solicitar información
              <div class="ld ld-ring ld-spin"></div>
            </button>
          ) : (
            <p className="sent-success">¡Enviado!. Pronto nos contactaremos contigo.</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactMediaForm;
