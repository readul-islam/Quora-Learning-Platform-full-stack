import { motion } from 'framer-motion';
import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import PrimaryBtn from '../../../components/PrimaryBtn';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];
const ChartSection = () => {
  return (
    <div className="bg-gradient-to-tr py-20  from-accent to-neutral">
      <div className="md:flex items-center overflow-hidden justify-around max-w-7xl mx-auto ">
        <motion.div
          className="flex-1"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <PieChart width={320} height={380}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Pie
              dataKey="value"
              data={data02}
              cx={300}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
            />
            <Tooltip />
          </PieChart>
        </motion.div>

        <motion.div
          className="p-6 flex-1 text-justify"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="text-xl pb-8 md:text-3xl lg:text-5xl  text-secondary font-bold font-serif">
            <p>Various types of Courses</p> <p>will scale up your scale</p>{' '}
          </div>
          <h1 className="pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe neque unde nobis. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Id nesciunt sed totam consequatur non aperiam
            architecto dignissimos ab commodi ea?
          </h1>
          <div>
            <PrimaryBtn style='text-white'>Try Now</PrimaryBtn>{' '}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChartSection;
