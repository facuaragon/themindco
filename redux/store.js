import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggle-slice";

export const store = configureStore({
  reducer: {
    toggleReducer,
  },
});
