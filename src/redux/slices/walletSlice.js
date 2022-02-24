import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "walletList",
  initialState: {
    listOfCards: [
      {
        id: Date.now(),
        cardNumber: "4578 7854 4522 1336",
        firstName: "React",
        lastName: "von Projektsson",
        validMonth: "07",
        validYear: "27",
        cvc: "412",
        vendor: "LE Bank",
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
