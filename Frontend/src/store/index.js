import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./Slices/authSlice";
import addCourse from "./Slices/addCourse";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
    reducer: {
        auth:authSlice,
        addCourse : addCourse,
        cart : cartSlice,
    },
})

export default store;