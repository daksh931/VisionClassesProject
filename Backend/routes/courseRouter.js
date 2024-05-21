import express from "express";
import { buyCourse, deleteCourse, getAllCourses, postCourse, updateCourse } from "../controllers/courseController.js";
import { isAuthorized } from "../middleware/auth.js";
import { upload } from "../middleware/multermiddleware.js";
const router = express.Router();

router.get("/getcourses",getAllCourses);
router.post("/postCourse",upload.single("image")
    , isAuthorized,postCourse);
// console.log("router work")
router.post("/:courseId",isAuthorized,buyCourse);
router.put("/update/:courseId",isAuthorized,updateCourse);  
router.put("/delete/:courseId",isAuthorized,deleteCourse);

const courseRouter = router;
export default courseRouter;