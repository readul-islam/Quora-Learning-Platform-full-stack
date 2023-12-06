import React, { useEffect, useState } from "react";
import CourseContent from "./CourseContent";
import { useParams } from "react-router-dom";
import { getCourseById } from "./api";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import ReactPlayer from "react-player";

const Course = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const [runVideo, setRunVideo] = useState(false);
  const [open, setOpen] = useState(false);
  const [syllabus, setSyllabus] = useState([]);
  const [syllabusMoreSection, setSyllabusMoreSection] = useState(0);
  const [requirements, setRequirements] = useState([]);
  const [description, setDescription] = useState("");
  const [seeMoreDescription, setSeeMoreDescription] = useState(false);
  const { courseId } = useParams();
  console.log(courseId);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCourseById(courseId);
      console.log(res);
      if (res) {
        let course = res.data;
        setCourseDetails(course);

        setRequirements(course.preRequisites);
        if (course.description.length >= 200) {
          setDescription(course.description.slice(0, 180));
        } else {
          setDescription(course.description);
        }
        if (course.syllabus.length > 7) {
          setSyllabus([...course.syllabus].splice(0, 6));
          setSyllabusMoreSection(course.syllabus.length-6);
          // console.log(course.)
        } else {
          setSyllabus(course.syllabus);
        }
      }
    };

    fetchData();
  }, [courseId]);
  console.log(syllabus);
  return (
    <>
      <div className="bg-gray-800">
        <div className="max-w-6xl mx-auto relative py-10 px-2">
          <div className="text-white max-w-2xl space-y-3">
            <p>{`Development >
Programming Languages >
Python `}</p>

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
              <span>Created by {courseDetails.instructor}</span>
              {/* <span> last updated: 20/12/2023 </span>{" "} */}
            </p>
            <div className="flex  gap-8">
              <p>Enrollment: {courseDetails.enrollmentStatus} </p>
              <p>Duration: 6 month </p>
              <p>Location: Gurugram, India </p>
            </div>
          </div>

          <div className="card z-50 bg-white shadow-xl min-h-[500px]  w-96 absolute cursor-pointer top-10 right-2">
            {!runVideo && (
              <figure className={`relative `}>
                <img src={courseDetails.thumbnail} alt="car!" />
                <MdOutlineSlowMotionVideo
                  onClick={() => setRunVideo(true)}
                  className="absolute text-fuchsia-500 cursor-pointer font-bold"
                  size={60}
                />
              </figure>
            )}
            {runVideo && (
              <ReactPlayer
                playing
                width="385px"
                height="200px"
                muted={false}
                controls={true}
                url={courseDetails.introUrl}
              />
            )}
            <div className="px-2 py-4">
              <h2 className="font-semibold text-lg">{courseDetails.name}</h2>
              <p className="pt-1 text-sm text-gray-500">
                {courseDetails.instructor}
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
          <CourseContent
            setSyllabusMoreSection={setSyllabusMoreSection}
            requirements={requirements}
            syllabus={syllabus}
            setSyllabus={setSyllabus}
            description={description}
            setDescription={setDescription}
            setSeeMoreDescription={setSeeMoreDescription}
            seeMoreDescription={seeMoreDescription}
            courseDetails={courseDetails}
            syllabusMoreSection={syllabusMoreSection}
          />
        </div>
      </div>
    </>
  );
};

export default Course;
