import express from "express";
import {forgotPassword, getUserDetails, login, logout, register, resetPassword, updatePassword, userUpdateDetails} from '../controllers/userController.js'
import { isAuthorized } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register, (req,res)=>{
    const user = req.user;
});
router.post("/login", login);
router.get("/logout", isAuthorized,logout);
router.get("/details", isAuthorized,getUserDetails);

router.post("/password/forgot",isAuthorized,forgotPassword);
router.put("/password/reset/:token",resetPassword);
router.put("/updatePassword",isAuthorized, updatePassword);

router.put("/updateProfile",isAuthorized, userUpdateDetails);

const userRouter = router;
export default userRouter;