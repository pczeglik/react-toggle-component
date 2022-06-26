import { configureStore } from "@reduxjs/toolkit";
import challangeReducer from "../features/challange/challangeSlice";

const store = configureStore({
  reducer: {
    challange: challangeReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
