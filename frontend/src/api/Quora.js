import axios from 'axios';
import store from '../store';
import { logIn } from '../store/authenticationSlice';


/*   // 'https://quora-backend-dl6q.onrender.com',
  // baseURL: 'http://localhost:5000', */
const quora = axios.create({
  baseURL: "https://quora-backend-omega.vercel.app",
  

  withCredentials: true,

});


quora.interceptors.request.use(
  (config) => {
    const token = store.getState().authentication.token;
    if (token) {
      config.headers['x-access-token'] = token;
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// set token in our
quora.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    // console.log("cok", Cookies.get());

    const originalRequest = error.config;
    // if forbidden then get refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await quora.post(
        '/api/user/auth-refresh',
        {},
        {
          headers: {
            refresh_token: localStorage.getItem('refresh-token'),
          },
        },
      );

      const token = response.data.token;
      store.dispatch(logIn(token));
      quora.defaults.headers.common['x-access-token'] = token;
      return await quora(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const commonThenResult = (result) => result.data;

export default quora;
