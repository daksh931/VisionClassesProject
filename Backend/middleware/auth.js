import { catchAsyncError } from "./catchAsyncErrors.js"
import ErrorHandler from './error.js';
import jwt from "jsonwebtoken"

import {User} from "../models/userSchema.js"

export const isAuthorized = catchAsyncError(async(req,res,next )=>{
    // req.cookies.token will not work bcoz req.cookies does not contain any nested obj 'token'.
    //  req.cookies is the token itself....
    const {token} = req.cookies;
    // console.log(token)
    if(!token){
        return next(new ErrorHandler("User not authorised", 400))
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY );
    // console.log(decoded)
    req.user = await User.findById(decoded.id);
    next();


    // jwt.verify(token, process.env.JWT_SECRET_KEY  ,(err, user)=>{
    //     if(err){
    //         console.log("error")
    //         return res.sendStatus(403);
    //     }
    //     req.user = user;
    //     next();

    // } )

})

