import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courseData : {"title": undefined,
    "description": undefined,
    "price" : undefined,
    "mode": undefined,
    "image":{
        "public_id":"sample_url_id",
        "url":"sample_url"
    }
}
}

const addCourseSlice = createSlice({
    name:"addCourse",
    initialState:initialState,
    reducers: {
        setCourseData(state,action){
            state.courseData = action.payload;
        }
    }
})

export const {setCourseData} = addCourseSlice.actions;
export default addCourseSlice.reducer;