import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: [true, "Please provide your name"],
        minLength: [3, "Name must be atleast 3 characters long"],
        maxLength: [30, "Name should not exceed 30 characters!"],
    },

    email :{
        type: String,
        required: [true, "Please provide your Email"],
        validate : [validator.isEmail, "Please provide a valid Email"]
    },
    phone:{
        type: Number,
        required:  [true, "Please provide your Phone Number"],
    },
    password:{
        type : String,
        required: [true, "Please provide your password"],
        minLength: [8, "Password must be atleast 8 characters long"],
        maxLength: [32, "Password should not exceed 32 characters!"],
        select : false, 
    },

    role:{
        type : String,
        required: [true, "Please provide your role "],
        enum : ["admin", "user"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

// Hashing password
userSchema.pre('save',  async function (next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);   // 10 is general value..
}); 

// Compairing password
userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

// generating a jwt tokem for auth   ** Don't use '() =>' functions otherwise code will not work....
    //                  don't use () => {}
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{expiresIn: process.env.JWT_EXPIRE});
};

export const User = mongoose.model("User",userSchema);

