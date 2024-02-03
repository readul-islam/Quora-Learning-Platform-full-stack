"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Enrollment_1 = __importDefault(require("../enrollment/controller/Enrollment"));
const router = express_1.default.Router();
const enrollmentRouter = express_1.default.Router();
// enroll in course auth
enrollmentRouter.post('/course/enroll', Enrollment_1.default.userEnrollInCourse);
// check this user is enrolled or not
enrollmentRouter.get('/course/is-enrolled', Enrollment_1.default.isEnrolled);
// get all courses where user enrolled
enrollmentRouter.get('/courses/enrolled', Enrollment_1.default.getEnrolledCourseByUserId);
router.use('/enrollment', enrollmentRouter);
exports.default = router;
