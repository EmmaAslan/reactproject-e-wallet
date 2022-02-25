import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomUser = createAsyncThunk(
  "walletList/getRandomUser",
  async () => {
    let response = await fetch("https://randomuser.me/api/");
    let json = await response.json();
    return json;
  }
);

const walletSlice = createSlice({
  name: "walletList",
  initialState: {
    randomUser: {
      firstName: "",
      lastName: "",
    },
    listOfCards: [
      {
        id: Date.now(),
        cardNumber: "4578 7854 4522 1336",
        randomUser: {
          firstName: "",
          lastName: "",
        },
        validMonth: "07",
        validYear: "27",
        cvc: "412",
        vendor: "LE Bank",
      },
    ],
    status: null,
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
  extraReducers: {
    [getRandomUser.fulfilled]: (state, { payload }) => {
      state.randomUser.firstName = payload.results[0].name.first.toUpperCase();
      state.listOfCards[0].randomUser.firstName =
        payload.results[0].name.first.toUpperCase();
      state.status = null;
    },
  },
});

export const { addCard, changeActive, deleteCard } = walletSlice.actions;
export default walletSlice.reducer;
