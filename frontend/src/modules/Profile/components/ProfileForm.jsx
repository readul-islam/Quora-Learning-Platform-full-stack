import { Form, Formik } from 'formik';
import React, { useId, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import PrimaryBtn from '../../../components/PrimaryBtn';
import Input from '../../../components/UI/Input';
import useInitialData from '../../../hooks/useInitialData';
import { INITIAL_DATA } from '../constants';
import PasswordChangeForm from './PasswordChangeForm';
const ProfileForm = ({ initialData }) => {
  const [value, setValue] = useState();


  const { isDataEmpty, initialValues } = useInitialData({
    initialData,
    INITIAL_DATA,
  });
  const handleFormSubmit = (values) => {


    console.log(values);
  };
  const formId = useId()
  return (
    <div className=" border-t pt-4 my-4">
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          enableReinitialize={isDataEmpty}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form id={formId} onSubmit={handleSubmit}>
              <div className="grid gap-x-6 gap-y-3  md:grid-cols-2">
                <div>

                  <Input
                  
                  type="text"
                 
                  name="firstName"
                  placeholder="John"
                  label={"First name"}
                  />
                  
                </div>
                <div>
                <Input
                  
                  type="text"
                 
                  name="lastName"
                  placeholder="Doe"
                  label={"Last name"}
                  />
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                  onChange={(e)=> setFieldValue("gender", e.target.value)}
                    name="gender"
                    as="select"
                    className="bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5 "
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                <Input
                  
                  type="number"
                 
                  name="age"
                  placeholder="ex:20"
                  label={"Age"}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>

                  <PhoneInput
                    name="phone"
                    id="phone"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={(e)=>{setValue(e), setFieldValue("phone", e)}}
                  />

                 
                </div>
                <div>
                <Input
                  
                  type="text"
                 
                  name="university"
                  placeholder="ex: X University"
                  label={"University"}
                  />
                </div>
                <div className="mb-4">
                 <Input
                  
                  type="email"
                 
                  name="email"
                  placeholder="ex: example@gmail.com"
                  label={"Email"}
                  />
              </div>
                <div className="mb-4">
                <Input
                  
                  type="url"
                 
                  name="portfolio"
                  placeholder="http//:example.com"
                  label={"Portfolio"}
                  />
              </div>
              </div>
            

              <PrimaryBtn type="submit" style={'text-white hover:text-black'}>
                Save Changes
              </PrimaryBtn>
            </Form>
          )}
        </Formik>
      </div>


<PasswordChangeForm/>

      <div className="border-t mt-4">
        <h3 className="my-3 text-xl font-semibold ">Delete Account</h3>

        <label
          className="flex items-center space-x-2 cursor-pointer"
          htmlFor="a"
        >
          <input type="checkbox" name="" id="a" />
          <span>I confirm my account deactivation</span>
        </label>

        <PrimaryBtn style={'bg-[#D24B4C] text-white mt-4 '}>
          Deactivate Account
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default ProfileForm;
