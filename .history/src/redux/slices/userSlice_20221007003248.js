import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUserById = createAsyncThunk("users/fetchAllUsers", async () => {
    let response = await axios.get("http://localhost:8080/users/all");
    return response.data;
});
const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false,
};

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export default userSlice.reducer;
