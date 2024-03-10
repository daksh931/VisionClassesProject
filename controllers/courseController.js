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
    
    const user = req.cookies.user;
    // console.log("cookie : " + req.cookies.user.email) 

    if(user.role === "user"){
        return next( new ErrorHandler("User is not allowed to create courses",400));
    }
    const {title,
        description,
        price,
        mode,} = req.body;

    if(!title|| !description || !price || !mode){
        return next(new ErrorHandler("Please fill or select all above options"))
    }

    const courseExist = await Course.findOne({title:title,description:description ,price:price,mode:mode })
    // console.log("exist : " +courseExist)
    if(courseExist){
        return next(new ErrorHandler("Course Already exist in database!"))
    }

    const postedBy = req.user.id;
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

// only users can buy courses 
export const buyCourse = catchAsyncError( async (req,res,next)=>{
    const user = req.cookies.user;
    // console.log(user)
    if(user.role === "admin"){
        return next(new ErrorHandler("Admin Can't buy Courses",400))
    }
    // in Mongo stores as _id: new ObjectId('65ebd3cfcb8946451317ea55') 
    // _id.toString() will convert _id: new ObjectId('65ebd3cfcb8946451317ea55')  ==> 65ebd3cfcb8946451317ea55
    // ans easily queried to mongo to search
    // but we used different approach to get user details using cookies...

    const currUser = await User.findById(user.id)
    // console.log(currUser)
    const courseId = req.params.courseId;
    // console.log(courseId)
    const course = await Course.findById(courseId);

    // const alreadyPurchasedCourses = currUser.purchasedCourses;
    const alreadyPurchased = await User.find({purchasedCourses: {_id : courseId} })   

    console.log(alreadyPurchased)
    if(alreadyPurchased.length !==0){
        return next(new ErrorHandler("already Purchased Courses",400))
    }

    if(course){
        if(currUser){
            currUser.purchasedCourses.push(course);
            currUser.save();

            res.status(200).json({
                success: true,
                message : "Course purchased Sucessfully",
                course,
            })
        }
        else{
            return next(new ErrorHandler("user not found"))
        }
    }
    else{
        return next(new ErrorHandler("course not found"))
    }
})
// 2:14 https://www.youtube.com/watch?v=6xRWaTWl2P0&t=1764s