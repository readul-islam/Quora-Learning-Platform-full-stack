import { useCountUp } from 'react-countup';
import React from 'react';
const OurSuccess = () => {
  useCountUp({
    ref: 'student',
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    delay: 0.1,
    start: 70000,
    end: 130404,
    duration: 2,
  });
  useCountUp({
    ref: 'intership',
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    delay: 0.5,
    start: 2891,
    end: 5050,
    duration: 3,
  });
  useCountUp({
    ref: 'job',
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    delay: 0.7,
    start: 6666,
    end: 60066,
    duration: 4,
  });
  useCountUp({
    ref: 'hairing',
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    delay: 0.9,
    start: 11111,
    end: 25025,
    duration: 5,
  });

  return (
    <section className="bg-gradient-to-tr py-24 from-neutral to-accent">
      <h1 className="text-xl md:text-3xl px-6 text-center  lg:text-5xl pb-4 text-secondary font-bold font-serif">
        Our Success
      </h1>
      <div className="divider mx-auto bg-red-500 h-[2px] w-32 mb-12"></div>
      <div className="grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4 gap-4 content-center  text-center max-w-7xl mx-auto">
        <div className="flex flex-col mx-6  py-6 bg-gradient-to-r  border text-black   ">
          <span className="font-mono  text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span id="student"></span>
          </span>
          <span className="font-semibold font-mono">student</span>
        </div>
        <div className="flex flex-col py-6 mx-6 bg-gradient-to-r  border text-black  ">
          <span className=" font-mono  text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span id="intership"> </span>
          </span>
          <span className="font-semibold font-mono">InternShip</span>
        </div>
        <div className="flex flex-col py-6 mx-6 bg-gradient-to-r  border text-black    ">
          <span className=" font-mono  text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span id="job"></span>
          </span>
          <span className="font-semibold font-mono">Job</span>
        </div>
        <div className="flex flex-col py-6 mx-6 bg-gradient-to-r  border text-black    ">
          <span className="font-mono  text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span id="hairing"></span>
          </span>
          <span className="font-semibold font-mono">Hairing</span>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
