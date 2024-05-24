// how user rehister & login -- logout 
import {catchAsyncError} from '../middleware/catchAsyncErrors.js'
import ErrorHandler from '../middleware/error.js';
import { User } from '../models/userSchema.js';
import { sendToken } from '../utils/jwtToken.js';
import {sendEmail} from '../utils/sendEmail.js'
import crypto from 'crypto';
import bcrypt from "bcrypt";
import { config } from 'dotenv';
config({ path: "../config/config.env"}); //connection to env PORT


export const register = catchAsyncError(async(req,res,next) =>{
    const {name,email, password,phone,role} = req.body;

    if(!name || !email || !password || !phone || !role){
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
        role,
    })


    // sending (user,statusCode, res, message) values to sendToken()...
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

    // comparing password with help of  comparePassword defined in userSchema....
    const isPasswordMatched  = await user.comparePassword(password);
    // console.log("working till here")
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password", 400));
    }

    sendToken(user,200 , res, "user loggedin Successfully!");
})


//logout controller
export const logout = catchAsyncError(async (req,res,next)=>{
    res.status(201).cookie("token",null,{
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message : "User Logged out Successfully"
    });
})


// forgot pssword
export const forgotPassword = catchAsyncError(async (req,res,next)=>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler("User not found", 404));
    }

    //get ResetPassword Token
    const resetToken =  await user.getResetPasswordToken();
    // console.log(resetToken)

    await user.save({validateBeforeSave : false});

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${user._id}/${resetToken}`;
                //req.protocol -> means (https or http)

    const message = `Your password reset token is -\n ${resetPasswordUrl}  \n \n If you have not requested this email then. please ignore it `;

    try {
        // options in sendEmail() function are sent
        await sendEmail({
            email : user.email,
            subject : `Vision Course password recovery`,
            message
        });

        res.status(200).json({
            success:true,
            message: `Email sent to ${user.email} successfully`,
        })

    } 
    catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        
        await user.save({validateBeforeSave : false });
        return next(new ErrorHandler(error.message, 500))
    }
})

// reset pssword
// we created resetToken and saved its hashed form in dbase
// now again we have to grab token and create its hashed form to find it in dbase 
// and get that user to it belongs and then update its password...  
export const resetPassword = catchAsyncError(async (req,res,next)=> {
    const token = req.params.token
    // console.log(token)

    const resetPasswordToken = crypto 
    .createHash("sha256")             
    .update(token)                    
    .digest("hex")                     

    const user = await User.findOne({
        resetPasswordToken:resetPasswordToken,
        resetPasswordExpire : { $gt : Date.now()},  // means resetPasswordExpire should be greater than curr time..
    });

    if(!user){
        return  next(new ErrorHandler("Reset Password Token is invalid or has been expired", 404));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match",400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    //now logging user after sucessfully password changed! 

    sendToken(user,200,res);

});

//update user password
export const updatePassword = catchAsyncError( async(req,res,next)=>{
    const user = await User.findById(req.user.id).select("+password");


    // console.log( req.body.oldPassword , req.body.newPassword, req.body.confirmPassword)
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    
    if(!isPasswordMatched){
        return next(new ErrorHandler("Old password is Incorrect", 401));
    }
    
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match", 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    // logging in user after password change...
    sendToken(user,200 ,res);
})



//get user details 
export const getUserDetails = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        sucess:true,
        user
    })
})


// update user Profile Details

export const userUpdateDetails = catchAsyncError(async(req,res,next)=>{
    
    const updatedProfile = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    };
    
    try {
        const user0 = await User.findById(req.user.id).select("+password");
        const isPasswordMatched = await user0.comparePassword(req.body.password);
        
        if(!isPasswordMatched){
            return next(new ErrorHandler("Password is Incorrect", 401));
        }
    
        const user = await User.findByIdAndUpdate(req.user.id, updatedProfile, {
            new: true,
            runValidators : true,
            useFindAndModify: false,
        });
    
        res.status(200).json({
            success:true,
            user,
            message: `Details updated Successfully`,
        });
        
    } 
    catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }

});

// add such api routes Admin can remove,add,update normal user details... 