import { Form, Formik } from 'formik';
import React, { useId } from 'react';
import PrimaryBtn from '../../../components/PrimaryBtn';
import Input from '../../../components/UI/Input';
import useInitialData from '../../../hooks/useInitialData';
import { PASSWORD_CHANGE_INITIAL_DATA } from '../constants';

const PasswordChangeForm = ({ initialData }) => {
  const { isDataEmpty, initialValues } = useInitialData(
   { initialData,
    PASSWORD_CHANGE_INITIAL_DATA,}
  );
 console.log(PASSWORD_CHANGE_INITIAL_DATA)
  const handleSubmitForm = (values) => {
    console.log(values);
  };
  console.log(initialValues)

  const formId = useId();
  return (
    <div className="mt-6 border-t">
      <h3 className="my-3 text-xl font-semibold ">Change Password</h3>
      <div>
      <Formik
        onSubmit={handleSubmitForm}
        initialValues={PASSWORD_CHANGE_INITIAL_DATA}
        enableReinitialize={isDataEmpty}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form id={formId} autoComplete='false' onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <Input
                autoComplete="true"
                type="password"
                name="oldPassword"
                label={'Old password'}
                placeholder="•••••••••"
              />
            </div>
            <div className="mb-4">
              <Input
              autoComplete="true"
                type="password"
                name="newPassword"
                label={'New password'}
                placeholder="•••••••••"
              />
            </div>

            <PrimaryBtn type="submit" style={'text-white'}>
              Change Password
            </PrimaryBtn>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
