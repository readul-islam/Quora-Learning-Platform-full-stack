import React, { useEffect, useState } from 'react';
import CustomAccordion from './CustomAccordion';
import { isEmpty } from 'lodash';

const CourseContent = ({
  requirements,
  syllabus,
  setSyllabus,
  setSyllabusMoreSection,
  description,
  setSeeMoreDescription,
  seeMoreDescription,
  courseDetails,
  syllabusMoreSection,
  setDescription,
}) => {
  console.log(syllabusMoreSection);
  const handleCountMoreSection = () => {
    setSyllabus(courseDetails.syllabus);
    setSyllabusMoreSection(0);
  };

  //   console.log(requirements);
  return (
    <div>
      <div className="pb-4 pl-1">
        <p className="text-xl font-semibold pb-2">Course content</p>
        <div className="md:flex  justify-between">
          <p className=" md:text-md text-sm">
            23 sections • 156 lectures • 22h 13m total length
          </p>
          <p className="md:text-md text-sm font-semibold ">Expand all section</p>
        </div>
      </div>
      <CustomAccordion syllabus={syllabus} />
      {syllabusMoreSection > 0 && (
        <button
          onClick={handleCountMoreSection}
          className="btn border border-gray-200 w-full mt-4"
        >
          {syllabusMoreSection} more section
        </button>
      )}
      {/* requirements section */}
      <div className="my-6 ">
        <h3 className="text-xl font-semibold mb-2">Requirements</h3>
        {!isEmpty(requirements) &&
          requirements.map((requirement,index) => (
          
              <div key={index} className=" px-4 mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-black" />
                <p>{requirement}</p>
              </div>
          
          ))}
      </div>

      {/* description section */}

      <div className="mb-6 ">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p>
          <span>{description}</span>{' '}
          {!seeMoreDescription && (
            <span
              onClick={() => {
                setDescription(courseDetails.description);
                setSeeMoreDescription(true);
              }}
              className="pl-1 font-semibold text-sky-700 underline cursor-pointer"
            >
              show more
            </span>
          )}
        </p>
      </div>

      {/* review section */}
    </div>
  );
};

export default CourseContent;
