import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { Course } from "../models/courseSchema.js";
import { User } from "../models/userSchema.js";
import {uploadOnCloudinary} from "../utils/Cloudinary.js"

// Get all products route
// export const getAllCourses = catchAsyncError( async(req,res,next)=>{
//     const courses = await Course.find({});
//     res.status(200).json({
//         sucess:true,
//         courses,
//     });
// });
   

export const getAllCourses = catchAsyncError( async(req,res,next)=>{
    const { page = 1, limit = 6 } = req.query;
    const skip = (page - 1) * limit;
  
    const courses = await Course.find().skip(skip).limit(Number(limit));
    const totalCourses = await Course.countDocuments();
  
    res.json({
      courses,
      totalPages: Math.ceil(totalCourses / limit),
      currentPage: Number(page),
    });
  
});
   


// update product route
export const updateCourse = catchAsyncError( async(req,res,next)=>{
    const user = req.user;
    if(user.role === "user"){
        return next( new ErrorHandler("User is not allowed to update courses",400));
    }

    let course = await Course.findById(req.params.courseId);
    console.log(course)
    if(!course){
        return res.status(500).json({
            sucess:false,
            message:" Course not found! "
        })
    }

    course = await Course.findByIdAndUpdate(req.params.courseId,req.body,{
        new:true,
        runValidators: true,
        useFindAndModify:false,
    });
 
    res.status(200).json({
        sucess:true,
        course
    });
});

// posting a course by admin only
export const postCourse = catchAsyncError( async(req,res,next)=>{
    // console.log("working1122",req)
    console.log("Body here" , req.body)
    console.log("File here" , req.file)
    
    // in req.user we are getting user details we can verify whether its admin or user
    // console.log(req.user.role)
    const user = req.user;
    
    // req.files ".files" functionality is given by multer(middleware to us)
    
    if(user.role === "user"){
        return next( new ErrorHandler("User is not allowed to create courses",400));
    }


    const {title,
        description,
        price,
        mode} = req.body;

    if(!title|| !description || !price || !mode){
        return next(new ErrorHandler("Please fill or select all above options"))
    }

    const courseExist = await Course.findOne({title:title,description:description ,price:price,mode:mode })
    // console.log("exist : " +courseExist)
    if(courseExist){
        return next(new ErrorHandler("Course Already exist in database!"))
    }
    const postedBy = req.user.id;
 
    // image handle on cloudinary
    const imagePath= req.file.path;
    const uploadedImage = await uploadOnCloudinary(imagePath);
    // console.log(uploadedImage)

    const course = await Course.create({
        title,
        description,
        price,
        mode,
        image:uploadedImage.secure_url,
        postedBy,
    });

    res.status(200).json({
        success: true,
        message : "Course (added) posted Sucessfully",
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
    // parsing nested object and checking whether user purchased course or not...
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


export const deleteCourse = catchAsyncError(async (req,res,next)=>{

    const course  = await Course.findById(req.params.courseId);
    if(!course){
        return res.status(500).json({
            success:false,
            message:"Course Not found",
        })
    }
    
    // console.log(course)
    await course.deleteOne();

    res.status(200).json({
        success: true,
        message : "Sucessfully Deleted",
        course,
    })
})

// 2:14 https://www.youtube.com/watch?v=6xRWaTWl2P0&t=1764s