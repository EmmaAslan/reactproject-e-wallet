import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "walletList",
  initialState: {
    listOfCards: [
      {
        id: Date.now(),
        cardNumber: "1231 1231 1231 1231",
        firstName: "React",
        lastName: "von Projektsson",
        validMonth: 11,
        validYear: 27,
        cvc: "123",
        vendor: "Visa",
      },
    ],
  },
  reducers: {
    addCard: (state, { payload }) => {
      state.listOfCards.push(payload);
    },
    changeActive: (state, { payload }) => {
      let filteredCards = state.listOfCards.filter(
        (card) => card.id !== payload.id
      );
      filteredCards.splice(0, 0, payload);
      return { ...state, listOfCards: filteredCards };
    },
    deleteCard: (state, { payload }) => {
      let filteredCards = state.listOfCards.filter(
        (card) => card.id !== payload
      );
      return { ...state, listOfCards: filteredCards };
    },
  },
});

export const { addCard, changeActive, deleteCard } = walletSlice.actions;
export default walletSlice.reducer;
