"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Course_1 = __importDefault(require("../../modules/course/controller/Course"));
const uploadVideo_1 = require("../../hooks/uploadVideo");
const router = express_1.default.Router();
const courseRouter = express_1.default.Router();
// 
courseRouter.post("/add", uploadVideo_1.upload.single("file"), Course_1.default.createNewCourse);
// 
courseRouter.get("/list", Course_1.default.getCourses);
// 
courseRouter.get("/", Course_1.default.getCourse);
// 
courseRouter.get("/search", Course_1.default.searchCourses);
courseRouter.put("/upload/video/:courseId/:syllabusId", uploadVideo_1.upload.single("file"), Course_1.default.uploadCourseSyllabusVideo);
// 
router.use("/course", courseRouter);
exports.default = router;
