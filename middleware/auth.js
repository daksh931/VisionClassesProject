import { catchAsyncError } from "./catchAsyncErrors.js"
import ErrorHandler from './error.js';
import jwt from "jsonwebtoken"
import {User} from "../models/userSchema.js"

export const isAuthorized = catchAsyncError(async(req,res,next )=>{
    const {token} = req.cookies;
    // console.log(req.cookies)
    if(!token){
        return next(new ErrorHandler("User not authorised", 400))
    }
    // const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY );
    // req.user = await User.findById(decoded.id);
    // next();
    jwt.verify(token, process.env.JWT_SECRET_KEY  ,(err, user)=>{
        if(err){
            console.log("error")
            return res.sendStatus(403);
        }
        req.user = user;
        next();

    } )

})

// export const AdminIsAuthorized = catchAsyncError(async(req,res,next )=>{
//     const {token} = req.cookies;
//     if(!token){
//         return next(new ErrorHandler("User not authorised", 400))
//     }
//     const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY );

//     req.user = await User.findById(decoded.id);

//     next();
// })