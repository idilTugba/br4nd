"use client";

import { configureStore } from "@reduxjs/toolkit";

import imageReducer from "./features/uploads/ImageSlice";

export const Store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

export type AppStore = typeof Store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
