import React from "react";
import CourseContent from "./CourseContent";

const Course = () => {
  return (
    <>
    <div className="bg-gray-800">
      <div className="max-w-6xl mx-auto relative py-10 px-2">
        <div className="text-white max-w-2xl space-y-3">
          <p>{`Development >
Programming Languages >
Python `}</p>

          <h3 className="text-4xl font-semibold">
            The Complete Python Bootcamp From Zero to Hero in Python
          </h3>
          <p className="text-lg">
            Learn Python like a Professional Start from the basics and go all
            the way to creating your own applications and games
          </p>
          <div className="flex items-center gap-1 pt-1">
            <p className="font-semibold">4.6</p>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
            </div>
            <p className="text-sm text-gray-500">
              (12440 rating) 1,825,167 students
            </p>
          </div>
          <p className="flex gap-8">
            <span>Created by Imran thena</span>
            {/* <span> last updated: 20/12/2023 </span>{" "} */}
          </p>
          <div className="flex  gap-8">
            <p>Enrollment:Open </p>
            <p>Duration: 6 month </p>
            <p>Location: Gurugram, India </p>
          </div>
        </div>

        <div className="card bg-white shadow-xl  w-80 absolute cursor-pointer top-10 right-2">
          <figure>
            <img
              src="https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png"
              alt="car!"
            />
          </figure>
          <div className="px-2 py-4">
            <h2 className="font-semibold text-lg">
              Automate the Boring Stuff with Python Programming
            </h2>
            <p className="pt-1 text-sm text-gray-500">Emran thali</p>

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
                  checked
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
              <p className="text-sm text-gray-500">
                (12440 rating) 1,825,167 students
              </p>
            </div>

            <div className="flex  items-center justify-between pr-2">
              <p>
                {" "}
                <span className="font-semibold">$15.99</span>{" "}
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
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-24 px-2">
        <div className="max-w-2xl">

        
        <CourseContent/>
        </div>
    </div>
    </>
  );
};

export default Course;
