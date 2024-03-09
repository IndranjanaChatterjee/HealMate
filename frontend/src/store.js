// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userImage: '',
    show: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userImage = action.payload.userImage;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { login, setShow } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
