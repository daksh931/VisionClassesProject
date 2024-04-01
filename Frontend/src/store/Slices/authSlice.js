import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData : localStorage.getItem("user")
    ?JSON.parse(localStorage.getItem("user")):null ,
    
    token :  localStorage.getItem("token")
        ?JSON.parse(localStorage.getItem("token"))
        : null
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

