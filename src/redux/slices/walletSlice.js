import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "walletList",
  initialState: {
    activeCard: [
      {
        cardNumber: "1231 1231 1231 1231",
        firstName: "React",
        lastName: "von Projektsson",
        validMonth: 11,
        validYear: 27,
        cvc: "123",
        vendor: "LElogo",
        id: 1
      },
    ],
    notActiveCards: [],
    latestId: 1,
    //isActive: true,
  },
  reducers: {
    addCard: (state, action) => {
      state.notActiveCards.push(action.payload);
      state.latestId += 1;
    },
    changeActive: (state, action) => {
      const active = state.activeCard.pop(action.payload);
      state.notActiveCards.push(active);

     
     // const change2 = state.notActiveCards.filter((card) => [...state, card.id = action.payload])
      //const change2 = state.notActiveCards.shift((card) => card.id !== action.payload)
      // const change2 = state.notActiveCards.shift(
      //   (card) => card.id === action.payload
      // );
      const notActive = state.notActiveCards = action.payload;
      state.activeCard.push(notActive);


      /*let notActive = state.notActiveCards.filter((card) => card.id !== payload.id);
      notActive.splice(0,0,payload);
      return {...state, notActiveCards: notActive}*/
     

    },
    /*changeActive: (state, action) => {
      state.notActive = [...state.listOfCards, action.payload];
      state.listOfCards.pop();
      state.listOfCards = [...state.notActive, action.payload];
      state.notActive.push();
    },*/
    /*changeActive: (state, action) => {
      const index = state.finIndex((card) => card.id === action.payload.id);
      state[index].ifActive = action.payload.ifActive;
    },*/

    /*changeActive: (state, action) => {
      const change = state.listOfCards.shift(action.payload);
      state.notActive.push(change);
    },*/
    /* changeActive: (state, payload) => {
      const changeActive = state.find((card) => card.id === payload.id);
      if (changeActive) changeActive.ifActive = payload.ifActive;
    },*/
    /*changeActive: (state, action) => {
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
