import React, { useEffect, useState } from 'react';
import { MdOndemandVideo } from 'react-icons/md';
import { HiOutlineFolderDownload } from 'react-icons/hi';
import { CiMobile1 } from 'react-icons/ci';
import { SiOpenaccess } from 'react-icons/si';
import { GiPodiumWinner } from 'react-icons/gi';

import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import CourseContent from './CourseContent';
import { getCourseById, isEnrolled, userEnrollInCourse } from './api';

import ReactPlayer from 'react-player';
import Skeleton from './Skeleton';
import PrimaryBtn from '../../components/PrimaryBtn';
import { useSelector } from 'react-redux';
import CourseHeaderInfo from './CourseHeaderInfo';

const Course = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const [runVideo, setRunVideo] = useState(false);
  const [reload, setReload] = useState(false);
  const [isEnrolledCourse, setIsEnrolledCourse] = useState(false);
  const [syllabus, setSyllabus] = useState([]);
  const [syllabusMoreSection, setSyllabusMoreSection] = useState(0);
  const [requirements, setRequirements] = useState([]);
  const [description, setDescription] = useState('');
  const [seeMoreDescription, setSeeMoreDescription] = useState(false);
  const { courseId } = useParams();
  const navigate = useNavigate();

  const {
    isLoggedIn,
    userInfo: { userId, email },
  } = useSelector((state) => state.authentication);

  useEffect(() => {
    const fetchIsExist = async () => {
      const res = await isEnrolled({ userId, courseId: courseId });
      setIsEnrolledCourse(res?.data?.isExist);
    };
    fetchIsExist();
  }, [reload]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCourseById(courseId);

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
          setSyllabusMoreSection(course.syllabus.length - 6);
        } else {
          setSyllabus(course.syllabus);
        }
      }
    };

    fetchData();
  }, [courseId]);

  const enrollCourseHandler = async () => {
    if (!isLoggedIn) {
      navigate('/register ');
    }

    try {
      const enrollmentData = {
        userId: userId,
        courseId: courseDetails._id,
        courseTitle: courseDetails.name,
        thumbnail: courseDetails.thumbnail,
        introUrl: courseDetails.introUrl,
        userName: '',
        userEmail: email,
        instructorName: courseDetails.instructor,
        status: courseDetails.enrollmentStatus,
      };

      const enrolling = await userEnrollInCourse(enrollmentData);
      setReload(!reload);
    } catch (error) {
      if (error.code === 'ERR_BAD_REQUEST') {
        alert('Already enrolled in this course');
      }
    }
  };

  return (
    <>
      {courseDetails.hasOwnProperty('name') ? (
        <>
          <div className="lg:bg-gray-800">
            <div className="max-w-6xl mx-auto lg:relative  py-10 px-2">
              <CourseHeaderInfo
                style="hidden lg:block"
                courseDetails={courseDetails}
              />
              <div className="card lg:z-50   bg-white lg:shadow-xl lg:min-h-[500px] lg:absolute lg:w-96  cursor-pointer lg:top-10 lg:right-2">
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
                  <div className="wrapper">
                    <ReactPlayer
                      playing
                      className="player"
                      width="100%"
                      height="100%"
                      muted={false}
                      controls={true}
                      url={courseDetails.introUrl}
                    />
                  </div>
                )}
                <div className="px-2 py-4">
                  <CourseHeaderInfo style='lg:hidden px-2 lg:px-0 !text-black' courseDetails={courseDetails}/>
                  <h2 className="font-bold px-2 text-3xl flex items-center gap-2">
                    <span> $15 </span>
                    <span className="line-through text-sm text-gray-500">
                      $84.99{' '}
                    </span>
                    <span className="text-sm text-gray-500">81% off</span>
                    {/* {courseDetails.name} */}
                  </h2>
                  <div className="px-2">
                    <PrimaryBtn
                      disabled={isEnrolledCourse ? true : false}
                      style="rounded-none border-secondary  w-full text-lg mb-2 hover:bg-gray-600 text-white mt-4 "
                    >
                      Add to cart
                    </PrimaryBtn>
                    <PrimaryBtn
                      disabled={isEnrolledCourse ? true : false}
                      onClickHandler={enrollCourseHandler}
                      style="rounded-none border  w-full text-lg bg-white text-gray-700  border-gray-400"
                    >
                      {isEnrolledCourse ? 'Enrolled' : 'Enroll now'}
                    </PrimaryBtn>
                  </div>
                  <div className="px-2 my-6">
                    <h4 className="font-semibold text-gray-600">
                      This course includes:
                    </h4>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 mt-1">
                        <MdOndemandVideo />
                        <span>9.5 hours on-demand video</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <HiOutlineFolderDownload />
                        <span>95 downloadable resources</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CiMobile1 />
                        <span>Access on mobile and TV</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <SiOpenaccess />
                        <span>Full lifetime access</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <GiPodiumWinner />
                        <span>Certificate of completion</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto lg:mt-16 px-2">
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
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default Course;
