import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./Slices/authSlice";
import addCourse from "./Slices/addCourse";

const store = configureStore({
    reducer: {
        auth:authSlice,
        addCourse : addCourse,
    },
})

export default store;