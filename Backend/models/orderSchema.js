import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    
    OrderCourse:[
        {
            name:{
                type: String,
                rquired : true,
            },
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            course:{
                type: mongoose.Schema.ObjectId,
                ref:"course",
                required:true
            }
        }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref:"user",
        required:true
    },
    
    paymentInfo: {
        id:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    },

    paidAt:{
        type:Date,
        required:true
    },

    itemsPrice:{
        type:Number,
        required:true,
        default:0
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    orderStatus:{
        type:String,
        required:true,
        default:"Processing",
    },
    purchasedAt:{
        createdAt:{
            type:Date,
            default:Date.now,
        }
    }
})

export const Order = mongoose.model("order",orderSchema)