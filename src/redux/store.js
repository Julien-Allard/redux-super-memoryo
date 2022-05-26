import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/cardsSlice";
import timerSlice from "./slices/timerSlice";
import turnsSlice from "./slices/turnsSlice";

export default configureStore({
  reducer: {
    cards: cardsSlice,
    timer: timerSlice,
    turns: turnsSlice,
  },
});
