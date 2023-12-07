import express from "express";
import EnrollmentController from '../enrollment/controller/Enrollment'
const router = express.Router();
const enrollmentRouter = express.Router();


// enroll in course auth
enrollmentRouter.post('/course/enroll', EnrollmentController.userEnrollInCourse)
// check this user is enrolled or not
enrollmentRouter.get('/course/is-enrolled', EnrollmentController.isEnrolled)
// get all courses where user enrolled
enrollmentRouter.get('/courses/enrolled', EnrollmentController.getEnrolledCourseByUserId)

router.use('/enrollment', enrollmentRouter)

export default router;