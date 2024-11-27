import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: [true, "Please provide your name"],
        minLength: [3, "Name must be atleast 3 characters long"],
        maxLength: [30, "Name should not exceed 30 characters!"],
    },

    email :{
        type: String,
        unique:true,
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

    purchasedCourses: [{type : mongoose.Schema.Types.ObjectId, ref:"courses"}],


    role: {
        type: String,
        required: [true, "Please select a role"],
        enum: ["admin", "user"],
      },

    createdAt:{
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
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

// reset password token
userSchema.methods.getResetPasswordToken = async function(){
    // only resetToken is sent to email not hashed form 
    const resetToken = crypto.randomBytes(20).toString("hex");

    // we created resetToken and saved its hashed form in dbase
    // hashing and adding to userSchema 
    // this.resetPasswordToken  means curr user resetPasswordToken is updated with token's hashed form...
    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")

    this.resetPasswordExpire = Date.now() + 15* 60* 1000;
    return resetToken;

    //this.resetPasswordExpire & this.resetPasswordToken fields are created in dbase and we can fetch & verify from user schema
}

// generating a jwt tokem for auth   ** Don't use '() =>' functions otherwise code will not work....
    //                  don't use () => {}
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id: this._id, email :this.email, role:this.role},
                     process.env.JWT_SECRET_KEY,
                     {expiresIn: process.env.JWT_EXPIRE});
};

export const User = mongoose.model("User",userSchema);

