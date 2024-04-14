import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : localStorage.getItem("user")
    ?JSON.parse(localStorage.getItem("user")):null ,
    
   

    token :  localStorage.getItem("token")
        ?JSON.parse(localStorage.getItem("token"))
        : null
};

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers: {
        setUserData(state,action){
            state.userData = action.payload;
        },
    
        setToken(state,action){
            state.token = action.payload;
        },
    },
})

export const { setToken, setUserData} = authSlice.actions;
export default authSlice.reducer;

