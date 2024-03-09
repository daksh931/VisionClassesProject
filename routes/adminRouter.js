import express from "express";
import {login, logout, register} from '../controllers/adminController.js'
import { isAuthorized } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorized,logout);

const adminRouter = router;
export default adminRouter;