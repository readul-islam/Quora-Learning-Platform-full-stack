import React from 'react';

const CourseHeaderInfo = ({ courseDetails, style }) => {
  return (
    <>
      <div className={`text-white ${style}  max-w-2xl space-y-3`}>
        <p>{`Development > Programming Languages > Python `}</p>

        <h3 className="text-4xl font-semibold">{courseDetails.name}</h3>
        <p className="text-lg">{courseDetails.description}</p>
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
          <span>Created by {courseDetails.instructor}</span>
          {/* <span> last updated: 20/12/2023 </span>{" "} */}
        </p>
        <div className="grid grid-cols-2 gap-3 lg:flex sm:grid-cols-3  pb-1 text-sm ">
          <p>
            Enrollment:
            <span className="font-semibold">
              {' '}
              {courseDetails.enrollmentStatus}{' '}
            </span>
          </p>
          <p>
            Duration: <span className="font-semibold"> 6 month </span>
          </p>
          <p>
            Location:<span className="font-semibold"> Gurugram, India</span>{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseHeaderInfo;
