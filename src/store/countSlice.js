import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment(state, action) {
            return state += 1;
        },
        decrement(state, action) {
            return state = state - 1
        }
    }
})

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer