import { configureStore } from "@reduxjs/toolkit";
import countSlice from './countSlice'
import postSlice from "./postSlice";

const store = configureStore({
    reducer: {
        count: countSlice,
        post: postSlice
    }
})

export default store;