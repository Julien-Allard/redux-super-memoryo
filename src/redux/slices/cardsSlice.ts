import { createSlice } from '@reduxjs/toolkit';

const cardsSet = [
  { src: '/img/Boo-icon.png', isMatched: false },
  { src: '/img/Bullet-Bill-icon.png', isMatched: false },
  { src: '/img/Flower-Fire-icon.png', isMatched: false },
  { src: '/img/Mushroom-Super-icon.png', isMatched: false },
  { src: '/img/Paper-Bowser-icon.png', isMatched: false },
  { src: '/img/Paper-Mario-icon.png', isMatched: false },
  { src: '/img/Shell-Green-icon.png', isMatched: false },
  { src: '/img/Star-icon.png', isMatched: false },
];

const shuffledCards = [...cardsSet, ...cardsSet]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({ ...card, id: Math.random() }));

interface CardsState {
  deck: typeof shuffledCards;
  matchedCards: number;
}

const initialState: CardsState = {
  deck: shuffledCards,
  matchedCards: 0,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateMatch: (state, action) => {
      state.deck = state.deck.map((card) => {
        if (card.src === action.payload) {
          return { ...card, isMatched: true };
        } else {
          return card;
        }
      });
    },
    resetCards: (state) => {
      state.deck = [...shuffledCards].sort(() => Math.random() - 0.5);
    },
    increaseMatched: (state) => {
      state.matchedCards += 2;
    },
    resetMatched: (state) => {
      state.matchedCards = 0;
    },
  },
});

export const { updateMatch, resetCards, increaseMatched, resetMatched } =
  cardsSlice.actions;
export default cardsSlice.reducer;
