import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: contactReducer,
  },
});
