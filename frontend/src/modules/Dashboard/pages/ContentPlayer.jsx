import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../Courses/api';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import ReactPlayer from 'react-player';
import CustomAccordion from '../../Courses/components/CustomAccordion';
import PlayerContentSidebarSkeleton from '../components/PlayerContentSidebarSkeleton';
import PlayerSkeleton from '../components/PlayerSkeleton';

const ContentPlayer = () => {
  const { userId, courseId } = useParams();
  const [course, setCourse] = useState({});
  const [runVideo, setRunVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // get specific course for a specific user
  useEffect(() => {
    const fetchCourse = async () => {
      const res = await getCourseById(courseId);

      setCourse(res.data);
      setVideoUrl(res.data.introUrl);
    };
    fetchCourse();
  }, [courseId]);

  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-2 ">
      <p className="text-xl pb-1 xl:block hidden pt-16">{course.name}</p>
      <div className="container-section  grid grid-cols-1 xl:pt-2 xl:grid-cols-3   xl:gap-x-4">
        {course.hasOwnProperty('name') ? (
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
        ) : (
          <PlayerSkeleton style="col-span-2 h-40  md:h-80 lg:96 xl:h-full w-full" />
        )}
        <div className="video-list my-2 xl:mt-0 w-full bg-white overflow-y-auto xl:h-[480px]">
          {course.hasOwnProperty('name') ? (
            <CustomAccordion
              videoUrl={videoUrl}
              setVideoUrl={setVideoUrl}
              syllabus={course.syllabus}
            />
          ) : (
            <PlayerContentSidebarSkeleton style="xl:mt-0 w-full bg-white overflow-y-auto xl:h-[480px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPlayer;
