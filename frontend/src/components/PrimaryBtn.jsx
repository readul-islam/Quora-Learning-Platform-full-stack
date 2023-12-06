import React from 'react';
import { motion } from "framer-motion";
const PrimaryBtn = ({style,children}) => {
    return (
        <button
       
        className={`btn ${style} bg-secondary  !py-1.5 text-white`}>{children}</button> 
    );
};

export default PrimaryBtn;