import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

import { useId } from "react";

const schema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(20).required("Required"),
});

function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onAdd({ id: nanoid(), ...values });
          actions.resetForm();
        }}
      >
        <Form className={styles.contactform}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage
            name="name"
            component="span"
            className={styles.warning}
          />
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.warning}
          />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}
export default ContactForm;
