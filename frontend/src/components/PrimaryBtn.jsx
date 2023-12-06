import React from 'react';
import { motion } from 'framer-motion';
const PrimaryBtn = ({ onClickHandler, style, children, ...others }) => {
  console.log(others);
  return (
    <button
      {...others}
      onClick={onClickHandler}
      className={`btn ${style} bg-secondary  !py-1.5`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
