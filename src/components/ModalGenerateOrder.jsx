import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal, Row, Col, Button } from "react-bootstrap";

const ModalGenerateOrder = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Generar orden de compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="container">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Debe ingresar un email válido";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Debe ingresar un email válido";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Row>
                  <Col xs={12} md={12}>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                  </Col>
                </Row>
                <Row>
                  <div className="d-grid gap-2">
                    <Button disabled={isSubmitting}>Enviar</Button>
                  </div>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalGenerateOrder;
