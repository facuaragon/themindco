import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    toggle: 0,
  },
};

export const toggle = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    openToggle: (state) => {
      return {
        value: {
          toggle: 1,
        },
      };
    },
    closeToggle: (state) => {
      return {
        value: {
          toggle: 0,
        },
      };
    },
  },
});

export const { openToggle, closeToggle } = toggle.actions;
export default toggle.reducer;
