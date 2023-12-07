import React from 'react';
import { Toaster as ToasterContainer } from 'react-hot-toast';

const Toaster = () => {
  return (
    <ToasterContainer
      position="top-right"
      reverseOrder={false}
      gutter={8}
      //   containerClassName=""
      containerStyle={{
        top: 80,
      }}
      toastOptions={{
        // Define default options
        className: '',
        duration: 2000,
        style: {
          background: '#fff',
          color: '#363636',
          padding: '10px 16px',
        },
        // Default options for specific types
        success: {
          duration: 2000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
        error: {
          duration: 4000,
         
        },
      }}
    />
  );
};

export default Toaster;
