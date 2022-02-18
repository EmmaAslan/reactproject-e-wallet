import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./slices/walletSlice";

const store = configureStore({
  reducer: {
    walletList: walletSlice, //här hamnar våra reducers
  },
});

export default store;
