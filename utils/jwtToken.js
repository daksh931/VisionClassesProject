
export const sendToken = (user,statusCode, res, message)=>{
  
    const  token = user.getJWTToken();
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 *1000
        ),
        httpOnly: true,
    }
    // setting up cookie with id,email,role for further evaluation 
    res.status(statusCode).cookie("token",token,options).cookie("user",{id: user._id, email : user.email,role : user.role} ).json({
        success: true,
        user,
        message,
        token,
    });
};