import express from "express";
import EnrollmentController from '../enrollment/controller/Enrollment'
const router = express.Router();
const enrollmentRouter = express.Router();

enrollmentRouter.post('/course/enroll', EnrollmentController.userEnrollInCourse)
enrollmentRouter.get('/course/is-enrolled', EnrollmentController.isEnrolled)
enrollmentRouter.get('/courses/enrolled', EnrollmentController.getEnrolledCourseByUserId)

router.use('/enrollment', enrollmentRouter)

export default router;