import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./features/authSlice"
import taskReducer from "./features/taskSlice"
export const makeStore = () => 
  configureStore({
    reducer: {
      auth: authReducer,
      task: taskReducer
    },
    devTools: true
});

export const wrapper = createWrapper(makeStore)