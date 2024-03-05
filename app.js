import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from './database/dbConnection.js'
import userRouter from './routes/userRouter.js'
import applicationRouter from './routes/applicationRouter.js'
import courseRouter from './routes/courseRouter.js'
import { errorMiddleware } from "./middleware/error.js";

const app = express();
dotenv.config( { path: "./config/config.env"}); //connection to env PORT

app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods: ['GET','POST','DELETE','PUT'],
    credentials : true,
}))

app.use(cookieParser());
app.use(express.json()); // parse json neglect other data...
app.use(express.urlencoded({extended: true})); // string conversion to json format
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir : "/tmp/",
}))

app.use('/api/v1/user', userRouter);
app.use('/api/v1/application', applicationRouter);
app.use('/api/v1/course', courseRouter);

dbConnection();
app.use(errorMiddleware);

export default app;