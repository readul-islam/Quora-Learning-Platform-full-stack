import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import axios from 'axios';
import Course from './Course';

const Courses = () => {
  
  const [allProducts,setAllProducts] = useState([])
  
  useEffect(() =>{
      const Products = async()=>{

          const {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')
                  console.log(data);
                  setAllProducts(data)
              }
              Products()

  },[])
    
    return (
        <section className='most-popular-course'>
        <div className=''>
        <div className=" flex justify-center">
          <div className=" navbar-center  lg:flex">
            <ul className="menu md:menu-horizontal p-0">
              <li>
                <a >ALL</a>
              </li>

              <li>
              <a>Web</a>
              </li>
              <li>
                <a>ADVERTISING</a>
              </li>

              <li>
                <a>BRANDING</a>
              </li>
              <li>
                <a>DESIGN</a>
              </li>
              <li>
                <a>PHOTOGRAPHY</a>
              </li>

             
            </ul>
          </div>
        </div>
      </div>  
      
    <div className=" bg-gradient-to-tr  from-accent to-neutral">
    <motion.div layout className='py-12 max-w-[1380px] mx-auto grid lg:grid-cols-4 content-center  md:grid-cols-3 grid-cols-1 gap-x-12 gap-y-10'>
      <AnimatePresence>
      {allProducts.slice(0,9).map(p =><Course/>)}
      
        </AnimatePresence>
    </motion.div>
    </div>
            
        </section>
    );
};

export default Courses;