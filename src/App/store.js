import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Features/auth';
import messageReducer from '../Features/message';

const reducer = {
  auth: authReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
