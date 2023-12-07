import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { getCourseList } from '../../Courses/api';

const PopularCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const list = await getCourseList();
      console.log(list);
      setCourses(list.data);
    };
    fetchData();
  }, []);

  const data = [
    {
      id: 1,
      name: 'UI Design Basics',
      img: 'https://www.pngitem.com/pimgs/m/171-1710609_digital-design-icon-png-transparent-png.png',
    },
    {
      id: 2,
      name: 'UI Design Basics',
      img: 'https://www.pngitem.com/pimgs/m/171-1710609_digital-design-icon-png-transparent-png.png',
    },
    {
      id: 3,
      name: 'UI Design Basics',
      img: 'https://www.pngitem.com/pimgs/m/171-1710609_digital-design-icon-png-transparent-png.png',
    },
    {
      id: 4,
      name: 'UI Design Basics',
      img: 'https://www.pngitem.com/pimgs/m/171-1710609_digital-design-icon-png-transparent-png.png',
    },
  ];
  return (
    <section className="bg-gradient-to-tr py-24 from-neutral to-accent ">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl pb-10 text-secondary font-bold font-serif text-center ">
          Our Popular Course
        </h1>
        <motion.div
          className="mx-6 md:mx-0"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Swiper
            className="py-10 lg:px-10 md:px-3 xl:px-0"
            spaceBetween={40}
            modules={[Pagination]}
            freeMode={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            grabCursor={true}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="card glass border md:h-96 ">
                  <figure
                    className="cursor-pointer"
                    onClick={() =>
                      navigate(`/course/${course.name}/${course._id}`)
                    }
                  >
                    <img src={course.thumbnail} alt="car!" />
                  </figure>
                  <div className="px-2 py-4">
                    <h2 className="font-semibold text-lg">{course.name}</h2>
                    <p className="pt-1 text-sm text-gray-500">
                      {course?.instructor}
                    </p>

                    <div className="flex items-center gap-1 pt-1">
                      <p className="font-semibold">4.6</p>
                      <div className="rating rating-xs">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                      <p className="text-sm text-gray-500">(12440)</p>
                    </div>

                    <div className="flex  items-center justify-between pr-2">
                      <p>
                        {' '}
                        <span className="font-semibold">$15.99</span>{' '}
                        <span className="line-through pl-1">$84.99</span>
                      </p>
                      <div className="rating rating-md gap-1 ">
                        <input
                          type="radio"
                          name=""
                          className="mask-heart mask bg-black"
                        />
                        <span> 1.1k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularCourse;
