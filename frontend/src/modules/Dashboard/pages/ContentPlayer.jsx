import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../Courses/api";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import ReactPlayer from "react-player";
import CustomAccordion from "../../Courses/CustomAccordion";

const ContentPlayer = () => {
  const { userId, courseId } = useParams();
  const [course, setCourse] = useState({});
  const [runVideo, setRunVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await getCourseById(courseId);
      console.log(res)
      setCourse(res.data);
      setVideoUrl(res.data.introUrl)
    };
    fetchCourse();
  }, [courseId]);

  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-2 ">
      <p className="text-xl pb-1 xl:block hidden pt-16">{course.name}</p>
      <div className="container-section  grid grid-cols-1 xl:pt-2 xl:grid-cols-3 xl:gap-x-4">
        <div className=" col-span-2  w-full ">
          {!runVideo && (
            <figure className={`relative `}>
              <img src={course.thumbnail} alt="thumbnail" />
              <MdOutlineSlowMotionVideo
                onClick={() => setRunVideo(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  text-fuchsia-500 cursor-pointer font-bold"
                size={60}
              />
            </figure>
          )}
          {runVideo && (
            <div className="wrapper">
              <ReactPlayer
                className="player"
                playing
                width="100%"
                height="100%"
                muted={false}
                controls={true}
                url={videoUrl}
              />
            </div>
          )}
        </div>

        <div className="video-list my-2 xl:mt-0 w-full bg-white overflow-y-auto xl:h-[480px]">
          <CustomAccordion setVideoUrl={setVideoUrl} syllabus={course.syllabus} />
        </div>
      </div>
    </div>
  );
};

export default ContentPlayer;
