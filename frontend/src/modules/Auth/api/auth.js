import quora, { commonThenResult } from '../../../api/Quora';

export const END_POINTS = {
  LOG_IN: () => '/api/user/login',
  REGISTER: () => '/api/user/register',
};
// login
export const logInApi = async (inputData) => {
  const res = await quora.post(END_POINTS.LOG_IN(), inputData, {
    withCredentials: true,
    credentials: 'include',
  });
  return commonThenResult(res);
};
// register
export const registerApi = async (inputData) => {
  const res = await quora.post(END_POINTS.REGISTER(), inputData);
  return commonThenResult(res);
};
