import quora, { commonThenResult } from '../../../api/Quora';

export const END_POINTS = {
  GET_COURSE_LIST_BY_USER_ID: () => '/api/enrollment/courses/enrolled',
};

// get all courses for a user by userId
export const getCourseListByUserId = async (query) => {
  const res = await quora.get(END_POINTS.GET_COURSE_LIST_BY_USER_ID(), {
    params: {
      userId: query.userId,
    },
  });
  return commonThenResult(res);
};
