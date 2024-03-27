
class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor)
    }

}

export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Inernal Server Error";
    err.statusCode = err.statusCode || 500;

    if(err.name === "CastError"){
        const message = `Resouces not found ${err.path}`;
        err = new ErrorHandler(message,400)
    }
    if(err.code === 11000){
        const message = `Duplicate ${object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400)
    }
    if(err.name === "JsonWebTokenError"){
        const message = `Json web token is invalid try again...`;
        err = new ErrorHandler(message,400)
    }
    if(err.name === "TokenExpiredError"){
        const message = `Json web token is invalid try again...`;
        err = new ErrorHandler(message,400)
    }
    //these are error which generally occurs and have to handle them be careful while writing them


    // Wrong JWT Error
    if(err.name === "jsonWebTokenError"){
        const message = "json web Token is invalid, try again",
        err = new ErrorHandler(message,400);
    }
    
    // JWT Expired Error
    if(err.name === "TokenExpiredError"){
        const message = "json web Token is Expired, try again",
        err = new ErrorHandler(message,400);
    }


    return res.status(err.statusCode).json({
        success:false,
        message: err.message,
    });
}

export default ErrorHandler;