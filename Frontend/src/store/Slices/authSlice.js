import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem("user");
const tokenFromStorage = localStorage.getItem("token");

const initialState = {
    userData: userFromStorage && tokenFromStorage ? JSON.parse(userFromStorage) : null,
    token: userFromStorage && tokenFromStorage ? JSON.parse(tokenFromStorage) : null
};

// Check if either userData or token is null, and perform logout
if (!initialState.userData || !initialState.token) {
    // Clear localStorage and trigger logout
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // window.location.href = '/login'; // Redirect to login page
}

// const initialState = {
//     userData : localStorage.getItem("user")
//     ?JSON.parse(localStorage.getItem("user")):null ,
    

//     token :  localStorage.getItem("token")
//         ?JSON.parse(localStorage.getItem("token"))
//         : null

//     };

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

