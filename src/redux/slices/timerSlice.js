import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    value: 0,
    max: 120,
    start: false,
  },
  reducers: {
    timerIncr: (state) => {
      state.value += 1;
    },
    timerReset: (state) => {
      state.value = 0;
    },
    toggleTimer: (state) => {
      state.start = !state.start;
    },
  },
});

export const { timerIncr, timerReset, toggleTimer } = timerSlice.actions;
export default timerSlice.reducer;
