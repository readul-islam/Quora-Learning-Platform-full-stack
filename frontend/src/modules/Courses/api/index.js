import quora, { commonThenResult } from '../../../api/Quora';

export const END_POINTS = {
  COURSE_LIST: () => '/api/course/list',
  GET_COURSE_BY_ID: () => '/api/course',
  SEARCH_COURSES: () => '/api/course/search',
  ENROLL_IN_COURSE: () => '/api/enrollment/course/enroll',
  IS_ENROLLED_COURSE: () => '/api/enrollment/course/is-enrolled',
};


// get all courses from db
export const getCourseList = async (inputData) => {
  const res = await quora.get(END_POINTS.COURSE_LIST());
  return commonThenResult(res);
};
// get a specific course with courseId
export const getCourseById = async (courseId) => {
  const res = await quora.get(END_POINTS.GET_COURSE_BY_ID(), {
    params: {
      courseId: courseId,
    },
  });
  return commonThenResult(res);
};
// search for courses 
export const searchCourses = async (inputData) => {
  const res = await quora.get(END_POINTS.SEARCH_COURSES(), {
    params: {
      query: inputData,
    },
  });
  return commonThenResult(res);
};
// user enrolling in specific course
export const userEnrollInCourse = async (inputBody) => {
  const res = await quora.post(END_POINTS.ENROLL_IN_COURSE(), inputBody);
  return commonThenResult(res);
};
// check  is user already enrolled in course or not 
export const isEnrolled = async (query) => {
  const res = await quora.get(END_POINTS.IS_ENROLLED_COURSE(), {
    params: {
      userId: query.userId,
      courseId: query.courseId,
    },
  });
  return commonThenResult(res);
};
