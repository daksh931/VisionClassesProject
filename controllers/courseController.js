import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { Course } from "../models/courseSchema.js";

export const getAllCourses = catchAsyncError( async(req,res,next)=>{
    const courses = await Course.find({});
    res.status(200).json({
        sucess:true,
        courses,
    });
});

export const postCourse = catchAsyncError( async(req,res,next)=>{
    const {role} = req.user;
    if(role === "user"){
        return next( new ErrorHandler("User is not allowed to create courses",400));
    }
    const {title,
        description,
        price,
        mode,} = req.body;

    if(!title|| !description || !price || !mode){
        return next(new ErrorHandler("Please fill or select all above options"))
    }

    const postedBy = req.user._id;
    const course = await Course.create({
        title,
        description,
        price,
        mode,
        postedBy,
    });

    res.status(200).json({
        success: true,
        message : "Job posted Sucessfully",
        course,
    })
})
// 2:14 https://www.youtube.com/watch?v=6xRWaTWl2P0&t=1764s