import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const FormGenerateOrder = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    firstName: yup.string().required("Campo requerido"),
    lastName: yup.string().required("Campo requerido"),
    email: yup.string().email("Email inválido").required("Campo requerido"),
    confirmEmail: yup
      .string()
      .email("Email inválido")
      .required("Campo requerido")
      .test({
        name: "sameAs",
        exclusive: false,
        params: {},
        message: "Debe coincidir con el email ingresado anteriormente",
        test: function (value) {
          return value === this.parent.email;
        },
      }),
    phone: yup
      .string()
      .required("Campo requerido")
      .matches(phoneRegExp, "Número de teléfono inválido"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      phone: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema,
  });

  const isValid = () => {
    return (
      !(formik.errors.firstName && formik.touched.firstName) &&
      !(formik.errors.lastName && formik.touched.lastName) &&
      !(formik.errors.email && formik.touched.email) &&
      !(formik.errors.confirmEmail && formik.touched.confirmEmail) &&
      !(formik.errors.phone && formik.touched.phone)
    );
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName" className="form-label mt-2">
              Nombre
            </label>
            <input
              id="firstName"
              name="firstName"
              className={
                formik.errors.firstName && formik.touched.firstName
                  ? "form-control is-invalid"
                  : "form-control"
              }
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <div className="invalid-feedback">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName" className="form-label mt-2">
              Apellido
            </label>
            <input
              id="lastName"
              name="lastName"
              className={
                formik.errors.lastName && formik.touched.lastName
                  ? "form-control is-invalid"
                  : "form-control"
              }
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <div className="invalid-feedback">{formik.errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="email" className="form-label mt-4">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={
                formik.errors.email && formik.touched.email
                  ? "form-control is-invalid"
                  : "form-control"
              }
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="confirmEmail" className="form-label mt-4">
              Confirmar Email
            </label>
            <input
              id="confirmEmail"
              name="confirmEmail"
              type="email"
              className={
                formik.errors.confirmEmail && formik.touched.confirmEmail
                  ? "form-control is-invalid"
                  : "form-control"
              }
              onChange={formik.handleChange}
              value={formik.values.confirmEmail}
            />
            {formik.errors.confirmEmail && formik.touched.confirmEmail && (
              <div className="invalid-feedback">
                {formik.errors.confirmEmail}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="phone" className="form-label mt-4">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              className={
                formik.errors.phone && formik.touched.phone
                  ? "form-control is-invalid"
                  : "form-control"
              }
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="invalid-feedback">{formik.errors.phone}</div>
            )}
          </div>
        </div>
        <div className="d-grid gap-2 mt-5">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!isValid()}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormGenerateOrder;
