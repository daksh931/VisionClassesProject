import express from "express";
import {forgotPassword, login, logout, register, resetPassword} from '../controllers/userController.js'
import { isAuthorized } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register, (req,res)=>{
    const user = req.user;
});
router.post("/login", login);
router.post("/password/forgot",isAuthorized,forgotPassword);
router.put("/password/reset/:token",resetPassword);
router.get("/logout", isAuthorized,logout);

const userRouter = router;
export default userRouter;