import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { isEmpty } from 'lodash';

import { getCourseList } from '../api';
const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // fetch all courses from db
  useEffect(() => {
    const fetchData = async () => {
      const list = await getCourseList();
      console.log(list);
      setCourses(list.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="px-12 py-6 ">
        <SearchBar setCourses={setCourses} />
        <p className="font-semibold text-xl mt-4 ">Courses</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5  gap-x-10 content-center gap-y-8 mt-4  ">
          {!isEmpty(courses) &&
            courses.map((course, index) => (
              <>
                <div
                  key={index}
                  onClick={() =>
                    navigate(`/course/${course.name}/${course._id}`)
                  }
                  className="card glass cursor-pointer"
                >
                  <figure>
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
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default CourseList;
