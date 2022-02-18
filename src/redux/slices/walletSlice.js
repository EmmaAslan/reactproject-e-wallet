import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "walletList",
  initialState: {
    listOfCards: [
      {
        cardNumber: "1231 1231 1231 1231",
        firstName: "React",
        lastName: "von Projektsson",
        validMonth: 11,
        validYear: 27,
        cvc: "123",
        id: 1,
        ifActive: true
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
