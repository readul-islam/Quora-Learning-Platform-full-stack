import React, { useEffect, useState } from "react";
import { getCourseListByUserId } from "../api";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

const Dashboard = () => {
  const [userCourseList, setUserCourseList] = useState([]);
  const {
    isLoggedIn,
    userInfo: { userId, email },
  } = useSelector((state) => state.authentication);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourseListByUserId({ userId: userId });
      setUserCourseList(res.data);
      console.log(res, "hhh");
    };
    fetchCourses();
  }, [userId]);
  console.log(userId);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto pt-10 h-full ">
        <h3 className="text-xl md:text-3xl lg:text-4xl pb-6 text-secondary font-bold font-serif">
          Welcome Back MD Readul Islam, Ready For Your Next Lesson?
        </h3>
        <div className=" grid grid-cols-1 xl:grid-cols-2 lg:px-0 md:px-24 px-3 gap-4">
          {!isEmpty(userCourseList) &&
            userCourseList.map((course) => (
              <>
                <div className="md:flex  flex-1 align-top bg-base-100 shadow-xl p-4 rounded border">
                  <figure className="flex-1 border border-gray-200 rounded">
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
                        type="button"
                        class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-1.5 px-2 text-white"
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-1.5 px-4 text-white"
                      >
                        Outline
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>

        {isEmpty(userCourseList) && (
          <>
            <h3 className="text-center text-4xl mt-20 font-semibold">
              Course Not Found
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
