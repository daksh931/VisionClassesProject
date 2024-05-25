import express from "express";
import {dbConnection} from './database/dbConnection.js'
import userRouter from './routes/userRouter.js'
import courseRouter from "./routes/courseRouter.js";
import {config} from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import orderRouter from "./routes/orderRouter.js";

const app = express();
config({ path: "./config/config.env"}); //connection to env PORT

// console.log(process.env.FRONTEND_URL)

app.use(cors({
    // origin : "http://localhost:5173",
    origin: [process.env.FRONTEND_URL],
    methods: ['GET','POST','DELETE','PUT'],
    credentials : true,
}))

app.use(cookieParser());
app.use(express.json()); // parse json neglect other data...
// app.use(express.urlencoded({extended: true})); // string conversion to json format
app.use(express.urlencoded({extended: false}))

app.get("/", (req,res)=>{
    res.status(200).send("Hello from Server");
})
app.use('/api/v1/user', userRouter);

app.use('/api/v1/course', courseRouter);
app.use('/api/v1/order', orderRouter);

dbConnection();
app.use(errorMiddleware);

export default app;