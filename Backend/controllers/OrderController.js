import {Order} from "../models/orderSchema.js";
import ErrorHandler from "../middleware/error.js";
import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import { Course } from "../models/courseSchema.js";

//create new order
export const newOrder = catchAsyncError(async (req,res,next)=>{
     const {
        OrderCourse,
        paymentInfo,
        itemsPrice,
        taxPrice,
        totalPrice,
            } = req.body;

    const order = await Order.create({
        OrderCourse,
        paymentInfo,
        itemsPrice,
        taxPrice,
        totalPrice,
        paidAt: Date.now(),
        user:req.user._id,
    });

    res.status(201).json({
        success:true,
        order,
    })
})

