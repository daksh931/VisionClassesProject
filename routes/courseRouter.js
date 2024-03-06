import express from "express";
import { getAllCourses, postCourse } from "../controllers/courseController.js";
import { isAuthorized } from "../middleware/auth.js";
const router = express.Router();

router.get("/getcourses",getAllCourses);
router.post("/postCourse",isAuthorized,postCourse);
export default router;