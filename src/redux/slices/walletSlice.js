import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "walletList",
  initialState: {
    listOfCards: [
      {
        cardNumber: 1234123412341234,
        name: "name lastname",
        valid: 11 / 11,
        cvc: 123,
        id: 1,
      },
    ],
    latestId: 1,
  },
  reducers: {
    addCard: (state, action) => {
      state.listOfCards.push(action.payload);
      state.latestId += 1;
    },
  },
});

export const { addCard } = walletSlice.actions;
export default walletSlice.reducer;
