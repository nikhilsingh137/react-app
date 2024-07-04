import { configureStore } from "@reduxjs/toolkit";
import ApiReducer from "./SliceApi";

export const store = configureStore({
  reducer: {
    detail: ApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
