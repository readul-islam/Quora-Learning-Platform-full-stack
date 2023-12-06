import quora, { commonThenResult } from "../../../api/Quora";

export const END_POINTS = {
  COURSE_LIST: () => "/api/course/list",
  GET_COURSE_BY_ID: () => "/api/course",
  SEARCH_COURSES: () => "/api/course/search",
};

export const getCourseList = async (inputData) => {
  const res = await quora.get(END_POINTS.COURSE_LIST());
  return commonThenResult(res);
};

export const getCourseById = async (courseId) => {
  const res = await quora.get(END_POINTS.GET_COURSE_BY_ID(), {
    params: {
     courseId:courseId,
    },
  });
  return commonThenResult(res);
};
export const searchCourses = async (inputData) => {
  const res = await quora.get(END_POINTS.SEARCH_COURSES(), {
    params: {
     query:inputData,
    },
  });
  return commonThenResult(res);
};
