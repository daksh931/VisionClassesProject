
export const sendToken = (user,statusCode, res, message)=>{
  
    const  token = user.getJWTToken();  // already defined in userSchema and calling here to grab token 
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 *1000
        ),
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }
    
    res.status(statusCode).cookie("token",token,options).json({
        success: true,
        user,
        message,
        token,
    });
};