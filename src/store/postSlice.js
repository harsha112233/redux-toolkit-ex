import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postslice = createSlice({
    name: "post",
    initialState: [],
    reducers: {
        getPost(state, action) {
            return state.concat(action.payload)
        },

        addPost(state, action) {
            return state
        }

    }
})

export const { getPost, addPost } = postslice.actions

export default postslice.reducer

export function fetchPost() {
    return async dispatch => {

        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(getPost(res.data))
        }
        catch (e) {
            console.log("fetcting error: " + e.message)
        }
    }
}
