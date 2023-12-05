import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navbar from '../../components/Navbar'
const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const navigate = useNavigate()
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <>
    <Navbar/>
   <div className="mx-12 my-6">
   <SearchBar/>
   <p className="font-semibold text-xl mt-4 ">Courses</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5  gap-x-10 content-center gap-y-8 mt-4  ">
        {list.map((data) => (
          <>
            <div onClick={()=> navigate(`/course/${data}`)} className="card glass cursor-pointer">
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
                  <p className="text-sm text-gray-500">(12440)</p>
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
          </>
        ))}
      </div>
   </div>



    </>
  );
};

export default CourseList;
