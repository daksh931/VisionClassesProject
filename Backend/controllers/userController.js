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


//signup or register 
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
    user.password = null;
    // sending (user,statusCode, res, message) values to sendToken()...
    sendToken(user, 201,res, "User registered Successfully!!");
    
});


// login 
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
    user.password = null;
    // console.log(user)
    sendToken(user,200 , res, "user loggedin Successfully!");
})


//logout controller
export const logout = catchAsyncError(async (req,res,next)=>{
    res.status(200).clearCookie("token",{
        httpOnly: true,
        secure: true,
        sameSite: 'none', //'sameSite' bcoz frontend/backend are on different servers (req to set cookies).
    }).json({
        success:true,
        message : "User Logged out Successfully"
    });
})
// when you specify HTTPOnly attribute in a cookie that means you will not be able access/modify that cookie 
// with javascript (i.e. with document.cookie property), that cookie can be access/modified by the server only

// forgot pssword
export const forgotPassword = catchAsyncError(async (req,res,next)=>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler("User not found", 404));
    }

    //get ResetPassword Token from user Schema 
    const resetToken =  await user.getResetPasswordToken();

    await user.save({validateBeforeSave : false});

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${user._id}/${resetToken}`;
                //req.protocol -> means (https or http)

    const message = `Your reset password Link is valid for 15 minutes -\n ${resetPasswordUrl}  \n \n If you have not requested this email then. please ignore it`;

    try {
        // options in sendEmail() function are sent
        await sendEmail({
            email : user.email,
            subject : `Vision Classes password recovery`,
            message
        });

        res.status(200).json({
            success:true,
            message: `Reset link sent to ${user.email} successfully`,
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

    //in user schema resetPasswordToken: {token} is present we are finding that and verifying it..  
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
    // in end we change below fields to undefined in user schema/model in dbase...
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    //now logging user after sucessfully password changed! 

    sendToken(user,200,res,"Password updated sucessfully");
    

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