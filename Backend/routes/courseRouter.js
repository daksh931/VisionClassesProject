import express from "express";
import { buyCourse, getAllCourses, postCourse } from "../controllers/courseController.js";
import { isAuthorized } from "../middleware/auth.js";
const router = express.Router();

router.get("/getcourses",getAllCourses);

router.post("/postCourse",isAuthorized,postCourse);
router.post("/:courseId",isAuthorized,buyCourse);

const courseRouter = router;
export default courseRouter;