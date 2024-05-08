import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./slice/Model";
import createModel from "./slice/AddModel";

export const store = configureStore({
  reducer: {
    model: modelReducer,
    user: createModel,
  },
});
