import React, { useEffect, useState } from "react";
import CustomAccordion from "./CustomAccordion";
import { isEmpty } from "lodash";

const CourseContent = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [countMoreSection, setCountMoreSection] = useState(0);
  const [requirements, setRequirements] = useState([]);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const requirementData =
    "Access to a computer with an internet connection.Javascript, React, Node";

  useEffect(() => {
    if (list.length > 7) {
      setCountMoreSection(list.length - 7);
      setCourses(list.splice(0, 6));
    }

    if (requirementData) {
      setRequirements(requirementData.split("."));
    }
  }, []);

  const handleCountMoreSection = () => {
    setCourses(list);
    setCountMoreSection(0);
  };

  //   console.log(requirements)
  return (
    <div>
      <div className="pb-4 pl-1">
        <p className="text-xl font-semibold pb-2">Course content</p>
        <div className="flex justify-between">
          <p className=" text-md">
            23 sections • 156 lectures • 22h 13m total length
          </p>
          <p className="text-md font-semibold">Expand all section</p>
        </div>
      </div>
      <CustomAccordion data={courses} />
      {countMoreSection > 0 && (
        <button
          onClick={handleCountMoreSection}
          className="btn border border-gray-200 w-full mt-4"
        >
          {countMoreSection} more section
        </button>
      )}

      <div className="my-4 ">
        <h3 className="text-xl font-semibold">Requirements</h3>
        {!isEmpty(requirements) &&
          requirements.map((requirement) => (
            <>
              <div className=" px-4 my-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-black" />
                <p>{requirement}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default CourseContent;
