// how user rehister & login -- logout 
import {catchAsyncError} from '../middleware/catchAsyncErrors.js'
import ErrorHandler from '../middleware/error.js';
import { User } from '../models/userSchema.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncError(async(req,res,next) =>{
    const {name,email, password,phone} = req.body;

    if(!name || !email || !password || !phone ){
        return next(new ErrorHandler("Please do not leave any input field blank!"))
    }

    const isEmail = await User.findOne({email});
    if(isEmail){
        return next(new ErrorHandler("Email Already Exist!"));
    }

    const user = await User.create({
        name,
        email,
        phone,
        password,
    })

    // sendind (user,statusCode, res, message) values to sendToken()...
    sendToken(user, 201,res, "User registered Successfully!!");
});


export const login = catchAsyncError( async(req,res,next)=>{
    const {email,password} = req.body;

    if(!email, !password){
        return next(
            new ErrorHandler("Please provide Email, Password .",400)
        )
    };
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password.", 400));
    }
    const isPasswordMatched  = await user.comparePassword(password);
    console.log("working till here")
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password", 400));
    }

   
    sendToken(user,200 , res, "user loggedin Successfully!");
})

export const logout = catchAsyncError(async (req,res,next)=>{
    res.status(201).cookie("token","",{
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message : "User Logged out Successfully"
    });
})