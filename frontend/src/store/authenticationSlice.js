import { createSlice } from '@reduxjs/toolkit';

const initialState = { token: '', isLoggedIn: false, userInfo: {} };

const authentication = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = !!action.payload.token;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },

    logOut(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.userInfo = {};
    },
  },
});

export const { logIn, logOut } = authentication.actions;

export default authentication.reducer;
