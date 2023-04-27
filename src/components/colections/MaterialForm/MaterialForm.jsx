import { Formik, Form, Field } from 'formik';

export const MaterialForm = ({ onSubmit, isSubmiting }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field name="title" />
        </label>
        <label>
          Link
          <Field name="link" type="text" />
        </label>
        <button type="submit" disabled={isSubmiting}>add materials</button>
      </Form>
    </Formik>
  );
};
