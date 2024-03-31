import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData : null,
    token :  null

};

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers: {
        setsignupData(state,action){
            state.signupData = action.payload;
        },
        setToken(state,action){
            state.token = action.payload;
        },
    },
})

export const { setToken, setsignupData} = authSlice.actions;
export default authSlice.reducer;

