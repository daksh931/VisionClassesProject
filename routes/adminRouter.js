import express from "express";
import {login, logout, register} from '../controllers/userController.js'
import { isAuthorized } from "../middleware/auth.js";

const adminRouter = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorized,logout);


export default adminRouter;