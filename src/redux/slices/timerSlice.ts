import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface TimerState {
  value: number;
  max: number;
  start: boolean;
}

const initialState: TimerState = {
  value: 0,
  max: 120,
  start: false,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
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
