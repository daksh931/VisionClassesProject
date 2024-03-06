import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGOOSE_URI,{
        dbName: "MERN_STACK",
    }).then( ()=>{
        console.log("Connected to database sucessfully!")
    }).catch( (err)=>{
        console.log(`Some Error occured while connecting to database : ${err} `)
    });
}

export default dbConnection;