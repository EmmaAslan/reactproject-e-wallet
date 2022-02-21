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
        ifActive: true,
      },
    ],
    inActiveCards: [
      {
        ifActive: false,
      },
    ],
    latestId: 1,
    //isActive: true,
  },
  reducers: {
    addCard: (state, action) => {
      state.inActiveCards.push(action.payload);
      state.latestId += 1;
    },
    /*changeActive: (state, action) => {
      state.listOfCards = state.listOfCards.filter(
        (card) => card.ifActive === false
      );
    },*/
    changeActive: (state, action) => {
      state.listOfCards.push(action.payload);
    },
    /*changeActive: (state, action) => {
      state.listOfCards.sort(action.payload);
      state.latestId = 1;
    },*/
    /*changeActive: (state) => {
      state.isActive = !state.isActive;
    },*/
  },
});

export const { addCard, changeActive } = walletSlice.actions;
export default walletSlice.reducer;
