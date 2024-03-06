import express from "express";
import { getAllCourses } from "../controllers/courseController";
const router = express.Router();

router.get("/courses",getAllCourses);
export default router;