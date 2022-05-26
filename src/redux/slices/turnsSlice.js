import { createSlice } from "@reduxjs/toolkit";

export const turnsSlice = createSlice({
  name: "turns",
  initialState: {
    turn: 0,
  },
  reducers: {
    turnIncr: (state) => {
      state.turn += 1;
    },
    turnReset: (state) => {
      state.turn = 0;
    },
  },
});

export const { turnIncr, turnReset } = turnsSlice.actions;
export default turnsSlice.reducer;
