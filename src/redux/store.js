import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/cardsSlice";
import timerSlice from "./slices/timerSlice";

export default configureStore({
  reducer: {
    cards: cardsSlice,
    timer: timerSlice,
  },
});
