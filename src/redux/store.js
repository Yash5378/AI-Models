import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./slice/Model";

export const store = configureStore({
  reducer: {
    model: modelReducer,
  },
});
