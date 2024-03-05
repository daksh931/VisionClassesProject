
class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Inernal Server Error";
    err.statusCode = err.statusCode || 500;

    if(err.name === "CaseError"){
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
    //these are error which generallu occurs and have to handle them be careful while writing them

    return res.status(err.statusCode).json({
        success:false,
        message: err.message,
    });
}

export default ErrorHandler;