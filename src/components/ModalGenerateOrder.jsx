import React from "react";
import { useFormik } from "formik";
import { Modal } from "react-bootstrap";

const ModalGenerateOrder = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      telephone: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
      dialogClassName="modal-80w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Generar orden de compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="firstName" className="form-label mt-2">
                  Nombre
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </div>
              <div className="form-group col">
                <label htmlFor="lastName" className="form-label mt-2">
                  Apellido
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <label htmlFor="email" className="form-label mt-4">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="confirmEmail" className="form-label mt-4">
                  Confirmar email
                </label>
                <input
                  id="confirmEmail"
                  name="confirmEmail"
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.confirmEmail}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <label htmlFor="telephone" className="form-label mt-4">
                  Teléfono
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.telephone}
                />
              </div>
            </div>
            <div className="d-grid gap-2 mt-5">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalGenerateOrder;
