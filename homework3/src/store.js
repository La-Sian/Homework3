// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

const store = configureStore({
  reducer: authSlice.reducer,
});

export default store;
