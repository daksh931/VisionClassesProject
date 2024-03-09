// how admin register & login -- logout 
import {catchAsyncError} from '../middleware/catchAsyncErrors.js'
import ErrorHandler from '../middleware/error.js';
import { Admin } from '../models/adminSchema.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncError(async(req,res,next) =>{
    const {name,email, password,phone} = req.body;

    if(!name || !email || !password || !phone ){
        return next(new ErrorHandler("Please do not leave any input field blank!"))
    }

    const isEmail = await Admin.findOne({email});
    if(isEmail){
        return next(new ErrorHandler("Email Already Exist!"));
    }

    const admin = await Admin.create({
        name,
        email,
        phone,
        password,
    })

    // sendind (admin,statusCode, res, message) values to sendToken()...
    sendToken(admin, 201,res, "Admin registered Successfully!!");
});


export const login = catchAsyncError( async(req,res,next)=>{
    const {email,password} = req.body;

    if(!email, !password){
        return next(
            new ErrorHandler("Please provide Email, Password.",400)
        )
    };
    const admin = await Admin.findOne({email}).select("+password");
    if(!admin){
        return next(new ErrorHandler("Invalid Email or Password.", 400));
    }
    const isPasswordMatched  = await admin.comparePassword(password);
    // console.log("working till here")
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password", 400));
    }

    sendToken(admin,200 , res, "Admin loggedin Successfully!");
})

export const logout = catchAsyncError(async (req,res,next)=>{
    res.status(201).cookie("token","",{
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message : "Admin Logged out Successfully"
    });
})