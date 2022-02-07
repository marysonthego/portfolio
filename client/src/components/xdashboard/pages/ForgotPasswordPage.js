import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import * as Yup from 'yup';
//import { requestPassword } from 'components/dashboard/components/AuthCrud';

const initialValues = {
  email: '',
};

export function ForgotPasswordPage(props) {
  //const { intl } = props;
  const [isRequested, ] = useState(false);
  const ForgotPasswordPageSchema = Yup.object().shape({
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email address is required'),
  });

  const getInputClasses = fieldname => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return 'is-invalid';
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return 'is-valid';
    }

    return '';
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ForgotPasswordPageSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      //requestPassword(values.email)
      // .then(() => setIsRequested(true))
      // .catch(() => {
      //   setIsRequested(false);
      //   setSubmitting(false);
      //   setStatus('Email not found');
      //});
    },
  });

  return (
    <>
      {isRequested && <Navigate to="/login" />}
      {!isRequested && (
        <div className="login-form login-forgot" style={{ display: 'block' }}>
          <div className="text-center mb-10 mb-lg-20">
            <h3 className="font-size-h1">Forgotten Password ?</h3>
            <div className="text-muted font-weight-bold">
              Enter your email to reset your password
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp">
            {formik.status && (
              <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                <div className="alert-text font-weight-bold">
                  {formik.status}
                </div>
              </div>
            )}
            <div className="form-group fv-plugins-icon-container">
              <input
                type="email"
                className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
                  'email'
                )}`}
                name="email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.email}</div>
                </div>
              ) : null}
            </div>
            <div className="form-group d-flex flex-wrap flex-center">
              <button
                id="kt_login_forgot_submit"
                type="submit"
                className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                disabled={formik.isSubmitting}>
                Submit
              </button>
              <Link to="/login">
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
