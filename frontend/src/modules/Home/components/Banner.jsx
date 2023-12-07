import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gril from '../../../assets/banner-gril.png';
import PrimaryBtn from '../../../components/PrimaryBtn';

const Banner = () => {
  const imgVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { damping: 30, duration: 0.9 } },
  };
  return (
    <div className="bg-gradient-to-tr  from-accent to-neutral">
      <section className="max-w-7xl mx-auto pb-4 ">
        <div className=" md:flex  h-screen flex-row-reverse items-center px-8">
          <motion.div initial="hidden" animate="visible" variants={imgVariants}>
            <img src={gril} alt="png" />
          </motion.div>
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[#FC6565] text-xl font-semibold italic pb-8"
            >
              Your E-learning fature
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="text-xl md:text-3xl lg:text-5xl pb-6 text-secondary font-bold font-serif"
            >
              {' '}
              <p>Online Learning Now</p> <p>In Your Fingertips</p>{' '}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.9 }}
              className="text-secondary "
            >
              <p>
                Quora is a online learning platform that offers various premium
              </p>{' '}
              <p>courses for your skill development</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.9, duration: 0.9 }}
              className="flex items-center py-6 space-x-10"
            >
              <PrimaryBtn style="text-white">Try now</PrimaryBtn>
              <div className="flex items-center rounded-full space-x-2 bg-primary py-1 px-2">
                <MdOutlineSlowMotionVideo size={25} />
                <p className="font-semibold">Play</p>{' '}
              </div>
            </motion.div>
          </div>
        </div>
        {/* card */}
        <div
          className="card w-full 
         bg-white text-primary-content shadow-xl py-4 mt-10 "
        >
          <div className=" md:flex p-4 md:justify-around items-center text-center md:space-y-0 space-y-4 ">
            <div className="text-secondary font-serif font-bold text-xl">
              <p>Over 500 Plus course</p>
              <p> in one place</p>
            </div>
            <p className="font-bold text-3xl ">Coursore</p>
            <p className="font-bold text-3xl">Udemy</p>
            <p className="font-bold text-3xl">SkillShare</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
