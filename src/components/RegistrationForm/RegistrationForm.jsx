import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";

import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

let formSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8, "Length must be 8 or more!").required(),
});

function RegistrationForm() {
  var nameId = useId();
  var emailId = useId();
  var passId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name: </label>
        <Field name="name" id={nameId} type="text" className={css.field} />
        <ErrorMessage name="name" />

        <label htmlFor={emailId}>Email: </label>
        <Field name="email" id={emailId} type="email" className={css.field} />
        <ErrorMessage name="email" />

        <label htmlFor={passId}>Password: </label>
        <Field
          name="password"
          id={passId}
          type="password"
          className={css.field}
        />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
