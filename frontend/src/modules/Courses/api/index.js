import quora, { commonThenResult } from "../../../api/Quora";

export const END_POINTS = {
  COURSE_LIST: () => "/api/course/list",
  GET_COURSE_BY_ID: () => "/api/course",
  SEARCH_COURSES: () => "/api/course/search",
  ENROLL_IN_COURSE: () => "/api/enrollment/course/enroll",
  IS_ENROLLED_COURSE: () => "/api/enrollment/course/is-enrolled",
};

export const getCourseList = async (inputData) => {
  const res = await quora.get(END_POINTS.COURSE_LIST());
  return commonThenResult(res);
};

export const getCourseById = async (courseId) => {
  const res = await quora.get(END_POINTS.GET_COURSE_BY_ID(), {
    params: {
      courseId: courseId,
    },
  });
  return commonThenResult(res);
};
export const searchCourses = async (inputData) => {
  const res = await quora.get(END_POINTS.SEARCH_COURSES(), {
    params: {
      query: inputData,
    },
  });
  return commonThenResult(res);
};
export const userEnrollInCourse = async (inputBody) => {
  const res = await quora.post(END_POINTS.ENROLL_IN_COURSE(), inputBody);
  return commonThenResult(res);
};
export const isEnrolled = async (query) => {
  const res = await quora.get(END_POINTS.IS_ENROLLED_COURSE(), {
    params: {
      userId: query.userId,
      courseId: query.courseId,
    },
  });
  return commonThenResult(res);
};
