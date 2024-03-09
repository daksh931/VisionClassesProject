import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required  : [true, "Please provide course Title"],
        minLength : [3, "title must be at least 3 characters long"],
        maxLength : [50, "title cannot exceed 50 characters "],
    },
    description : {
        type:String,
        required  : [true,"Please provide course description"],
        minLength : [3, "title must be at least 3 characters long"],
        maxLength : [50, "title cannot exceed 50 characters "],
    },
    price: {
        type: Number,
        required: [true,"Please provide course price"],
    },
    mode:{
        type: String,
        required: [true,"Please select your mode of course"],
        enum : ['online' , 'offline'],
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required:true,
    }
})

export const Course = mongoose.model("course",courseSchema);