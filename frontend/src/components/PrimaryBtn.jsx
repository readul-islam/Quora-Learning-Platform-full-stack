import React from 'react';
import { motion } from "framer-motion";
const PrimaryBtn = ({children}) => {
    return (
        <button
       
        className="btn bg-secondary border-none !py-1.5 text-white">{children}</button> 
    );
};

export default PrimaryBtn;