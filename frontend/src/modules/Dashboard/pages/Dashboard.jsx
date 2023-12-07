import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCourseListByUserId } from '../api';
import DashboardSkeleton from '../components/DashboardSkeleton';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userCourseList, setUserCourseList] = useState([]);
  const [isUserNOCourse, setIsUserNoCourse] = useState(false);
  const {
    userInfo: { userId },
  } = useSelector((state) => state.authentication);

  // fetch all courses for a specific user
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourseListByUserId({ userId: userId });
      setUserCourseList(res.data);
      console.log(res, 'hhh');
    };

    fetchCourses();
    //  if course not exist show content not found but it will some time later
    const useDebounce = () => {
      const handler = setTimeout(() => {
        if (isEmpty(userCourseList)) {
          setIsUserNoCourse(true);
        }
        console.log('mew');
      }, 3000);

      return () => {
        clearTimeout(handler);
      };
    };
    useDebounce();
  }, [userId]);

  // navigator
  const navigateHandler = (user_id, course_id, courseName) => {
    navigate(`${courseName}/${user_id}/${course_id}`);
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto  py-10 h-full  ">
        <h3 className="text-xl px-4 md:text-3xl lg:text-4xl pb-6 text-secondary font-bold font-serif">
          Welcome Back MD Readul Islam, Ready For Your Next Lesson?
        </h3>
        <div className=" grid grid-cols-1 xl:grid-cols-2 lg:px-4 xl:px-0 md:px-24 px-3 gap-4">
          {!isEmpty(userCourseList) &&
            userCourseList.map((course, index) => (
              <>
                <div
                  key={index}
                  className="md:flex  flex-1 align-top bg-base-100 shadow-xl p-4 rounded border"
                >
                  <figure className="flex-1 lg:flex-none xl:flex-1 border border-gray-200 rounded">
                    <img
                      className="w-96 h-[186px]"
                      src={`${course.thumbnail}`}
                      alt="Movie"
                    />
                  </figure>
                  <div className="px-4 flex-1 space-y-4">
                    <h3 className="text-xl font-bold">{course.courseTitle}</h3>
                    <p className="text-gray-500 font-semibold">
                      Instructor: {course.instructorName}
                    </p>
                    <div className="flex items-center justify-between gap-10 ">
                      <progress
                        className="progress progress-info h-3 "
                        value="100"
                        max="100"
                      ></progress>

                      <p>100%</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-8 ">
                      <button
                        onClick={() => {
                          navigateHandler(
                            course.userId,
                            course.courseId,
                            course.courseTitle,
                          );
                        }}
                        type="button"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-1.5 px-2 text-white"
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-1.5 px-4 text-white"
                      >
                        Outline
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>

        {isEmpty(userCourseList) && !isUserNOCourse && (
          <div className="flex gap-24">
            <DashboardSkeleton />
            <DashboardSkeleton />
          </div>
        )}
        {isEmpty(userCourseList) && isUserNOCourse && (
          <p className="text-center pt-20 text-2xl">Unavailable Courses</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
