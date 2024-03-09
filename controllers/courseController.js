import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { Admin } from "../models/adminSchema.js";
import { Course } from "../models/courseSchema.js";
import { User } from "../models/userSchema.js";

export const getAllCourses = catchAsyncError( async(req,res,next)=>{
    const courses = await Course.find({});
    res.status(200).json({
        sucess:true,
        courses,
    });
});


// posting a course by admin only
export const postCourse = catchAsyncError( async(req,res,next)=>{

    console.log(req.user.id)

    // const userId = req.user.id;
    // console.log("user ID  "+req.user.id)

    // console.log(req.user)

    // if(req.user.role === "user"){
    //     return next( new ErrorHandler("User is not allowed to create courses",400));
    // }
    // const {title,
    //     description,
    //     price,
    //     mode,} = req.body;

    // if(!title|| !description || !price || !mode){
    //     return next(new ErrorHandler("Please fill or select all above options"))
    // }

    // const postedBy = req.user.id;
    // const course = await Course.create({
    //     title,
    //     description,
    //     price,
    //     mode,
    //     postedBy,
    // });

    // res.status(200).json({
    //     success: true,
    //     message : "Job posted Sucessfully",
    //     course,
    // })
})

// only users can buy courses 
export const buyCourse = catchAsyncError( async (req,res,next)=>{
    const {_id,role} = req.user;
    if(role === "admin"){
        return next(new ErrorHandler(("Admin Can't buy Courses",400)))
    }
    const userId = _id; 
    // in Mongo stores as _id: new ObjectId('65ebd3cfcb8946451317ea55') 
    // _id.toString() will convert _id: new ObjectId('65ebd3cfcb8946451317ea55')  ==> 65ebd3cfcb8946451317ea55
    // ans easily queried to mongo to search
    const currUser = await User.findById(userId)
    // console.log(currUser)
    const courseId = req.params.courseId;
    console.log(courseId)

    // console.log(currUser.purchasedCourses)
    
    console.log("purchased Courses " + currUser.purchasedCourses)

    // const course = await Course.findById(courseId)  ;
    // if(course){
    //     const user = await User.findById({_id});
    //     if(user){
    //         user.purchasedCourses.push(course);
    //         user.save();

    //         res.status(200).json({
    //             success: true,
    //             message : "Course purchased Sucessfully",
    //             course,
    //         })
    //     }
    //     else{
    //         return next(new ErrorHandler("user not found"))
    //     }
    // }
    // else{
    //     return next(new ErrorHandler("course not found"))
    // }
})
// 2:14 https://www.youtube.com/watch?v=6xRWaTWl2P0&t=1764s