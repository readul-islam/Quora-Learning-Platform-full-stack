import React from "react";
import { motion } from "framer-motion";

const Course = ({ course }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        layout
        className="card mx-w-xs h-[348px] overflow-hidden bg-base-100 shadow-xl"
      >
        <motion.div whileHover={{ y: -80 }} transition={{ duration: 0.5 }}>
          <figure className="overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>

            <div className="card-actions pt-14   justify-between">
              <div className="btn btn-secondary text-white">Details</div>
              <div className="btn bg-[#F5BE37] font-bold text-black">
                Add to cart
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Course;
