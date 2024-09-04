import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { addUser } from "../../redux/usersOps";
import css from './UserForm.module.css'

export const UserForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const newUser = await response.json();

      dispatch(addUser(newUser));

      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={css.containerForm}>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          number: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className={css.formItem}>
              <Field type="text" name="name" placeholder="Enter name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <br />
            <div className={css.formItem}>
              <Field type="text" name="username" placeholder="Enter username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <br />
            <div className={css.formItem}>
              <Field type="email" name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <br />
            <div className={css.formItem}>
              <Field
                type="tel"
                name="number"
                placeholder="Enter phone number"
              />
              <ErrorMessage name="number" component="div" />
            </div>
            <br />
            <button className={css.formButton} type="submit">Add user</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
