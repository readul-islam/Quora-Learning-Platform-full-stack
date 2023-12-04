import { createSlice } from '@reduxjs/toolkit';

const initialState = { token: '', isLoggedIn: false };

const authentication = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = !!action.payload;
      state.token = action.payload;
    },

    logOut(state) {
      state.token = null;
    },
  },
});

export const { logIn, logOut } = authentication.actions;

export default authentication.reducer;
