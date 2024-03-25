import express from "express";
import { buyCourse, deleteCourse, getAllCourses, postCourse, updateCourse } from "../controllers/courseController.js";
import { isAuthorized } from "../middleware/auth.js";
const router = express.Router();

router.get("/getcourses",getAllCourses);

router.post("/postCourse",isAuthorized,postCourse);
router.post("/:courseId",isAuthorized,buyCourse);
router.put("/update/:courseId",isAuthorized,updateCourse);
router.put("/delete/:courseId",isAuthorized,deleteCourse);

const courseRouter = router;
export default courseRouter;