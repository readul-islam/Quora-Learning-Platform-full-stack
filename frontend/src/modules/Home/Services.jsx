import React from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Services = () => {
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
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            centeredSlides={true}
            spaceBetween={20}
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            //modules={[EffectCoverflow,Autoplay,Pagination]}
            className="mySwiper"
          >
            {data.map((d) => (
              <div key={d.id}>
                <SwiperSlide>
                  <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{d.name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
