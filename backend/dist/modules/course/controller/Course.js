"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_handler_1 = require("../../../utils/common.handler");
const service_1 = require("../service");
class CourseController {
    // create a new course
    createNewCourse(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const course = yield (0, service_1.createNewCourse)(req, next);
                if (course) {
                    (0, common_handler_1.SuccessResponse)(res, course, "Course created successfully");
                }
                else {
                    throw new common_handler_1.AppError("something went wrong", 400);
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // get one course by courseId
    getCourse(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const course = yield (0, service_1.getCourse)(req.query);
                if (course) {
                    (0, common_handler_1.SuccessResponse)(res, course, "Course created successfully");
                }
                else {
                    (0, common_handler_1.ErrorResponse)(res, 404, "Course not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // get all courses
    getCourses(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const course = yield (0, service_1.getCourses)();
                (0, common_handler_1.SuccessResponse)(res, course, "Course fetched successfully");
            }
            catch (error) { }
        });
    }
    // upload single video for course syllabus
    uploadCourseSyllabusVideo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uploadVideo = yield (0, service_1.uploadCourseSyllabusVideo)(req, next);
                (0, common_handler_1.SuccessResponse)(res, uploadVideo, "Video uploaded successfully");
            }
            catch (error) {
                next(error);
            }
        });
    }
    // filter on courses
    searchCourses(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const courses = yield (0, service_1.searchCourses)(req.query);
                (0, common_handler_1.SuccessResponse)(res, courses, "Courses fetched successfully");
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new CourseController();
