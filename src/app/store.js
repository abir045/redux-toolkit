import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counterSlice/counterSlice";
import postsReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
