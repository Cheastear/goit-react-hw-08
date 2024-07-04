import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import css from "./LogIn.module.css";

let formSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8, "Length must be 8 or more!").required(),
});

function LogIn() {
  var emailId = useId();
  var passId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
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

export default LogIn;
