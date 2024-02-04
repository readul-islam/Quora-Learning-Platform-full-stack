import { Field } from 'formik';
import React from 'react';

const Input = ({ type, label, className, name, ...others }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       {label}
      </label>
      <Field
        {...others}
        name={name}
        type={type}
        id={name}
        className={`${className && className}  bg-transparent border border-gray-300 outline-none text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5`}
      />
    </>
  );
};

export default Input;
