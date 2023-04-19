import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  font-size: 68px;
`;
export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login <Input type="text" name="login" />
          <ErrorMessage name='login' />
        </label>
        <label htmlFor="password">
          Password <Field type="password" name="password" />
          <ErrorMessage name='password' />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
