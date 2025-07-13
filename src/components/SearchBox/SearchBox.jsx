import { Field, Form, Formik } from "formik";

import styles from "./SearchBox.module.css";

function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={styles.form}>
      <p>Find contact by name</p>
      <Formik>
        <Form>
          <Field
            type="text"
            name="searchName"
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </Form>
      </Formik>
    </div>
  );
}
export default SearchBox;
