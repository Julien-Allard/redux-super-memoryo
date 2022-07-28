import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';
import timerSlice from './slices/timerSlice';
import turnsSlice from './slices/turnsSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    timer: timerSlice,
    turns: turnsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
