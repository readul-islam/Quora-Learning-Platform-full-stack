import React from 'react';
import { motion } from "framer-motion";
const PrimaryBtn = ({children}) => {
    return (
        <motion.button
        whileHover={{ scale: 0.8 }}
    whileTap={{ scale: 1 }}
        className="btn bg-secondary border-none text-white">{children}</motion.button> 
    );
};

export default PrimaryBtn;