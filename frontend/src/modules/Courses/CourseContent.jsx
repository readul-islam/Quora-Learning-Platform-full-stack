import React, { useEffect, useState } from "react";
import CustomAccordion from "./CustomAccordion";
import { isEmpty } from "lodash";

const CourseContent = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [countMoreSection, setCountMoreSection] = useState(0);
  const [requirements, setRequirements] = useState([]);
  const [description, setDescription] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const requirementData =
    "Access to a computer with an internet connection.Javascript, React, Node";
  const descriptionData = `Become a Python Programmer and learn one of employer's most requested skills of 2023!
This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!`;
  useEffect(() => {
    if (list.length > 7) {
      setCountMoreSection(list.length - 7);
      setCourses(list.splice(0, 6));
    }

    if (requirementData) {
      setRequirements(requirementData.split("."));
    }
    if (descriptionData.length > 200) {
      setDescription(descriptionData.slice(0, 200));
      setSeeMore(true);
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
      {/* requirements section */}
      <div className="my-6 ">
        <h3 className="text-xl font-semibold mb-2">Requirements</h3>
        {!isEmpty(requirements) &&
          requirements.map((requirement) => (
            <>
              <div className=" px-4 mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-black" />
                <p>{requirement}</p>
              </div>
            </>
          ))}
      </div>

      {/* description section */}

      <div className="mb-6 ">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p>
          <span>{description}</span>{" "}
          {seeMore && (
            <span
              onClick={() => {
                setDescription(descriptionData);
                setSeeMore(false);
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
