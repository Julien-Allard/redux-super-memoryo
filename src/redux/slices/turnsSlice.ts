import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface TurnsState {
  turn: number;
}

const initialState: TurnsState = {
  turn: 0,
};

export const turnsSlice = createSlice({
  name: 'turns',
  initialState,
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

export const turnCount = (state: RootState) => state.turns.turn;

export default turnsSlice.reducer;
