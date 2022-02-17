import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        home: null
    }
})

export default store;