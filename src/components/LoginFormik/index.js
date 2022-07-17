import React from "react";
import { Formik } from "formik";

export default function LoginFormik() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <header>
            <img width="100" src="/static/svgs/login-img.svg" alt="login" />
          </header>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <span role="alert" className="red-line">
              {errors.email}
            </span>
          )}
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && touched.password && (
            <span role="alert" className="red-line">
              {errors.password}
            </span>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      )}
    </Formik>
  );
}
