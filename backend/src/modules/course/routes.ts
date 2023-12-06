import express from "express";
import CourseController from "../../modules/course/controller/Course";
import { upload } from "../../hooks/uploadVideo";
const router = express.Router();
const courseRouter = express.Router();




// 
courseRouter.post("/add", upload.single("file") ,CourseController.createNewCourse);
// 
courseRouter.get("/list", CourseController.getCourses);
// 
courseRouter.get("/",CourseController.getCourse);
// 
courseRouter.get("/search",CourseController.searchCourses);
// 
router.use("/course", courseRouter);

export default router;
