import { Types } from "mongoose";
import { TStatus } from "../../course/helper/course.interface";
import { NextFunction, Request, Response } from "express";

type TEnrollment = {
  user_id: string;
  course_id: string;
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  courseTitle: string;
  thumbnail: string;
  introUrl: string;
  userName: string;
  userEmail: string;
  instructorName: string;
  status: TStatus;
};

type TEnrollmentController={
  userEnrollInCourse:(req: Request, res: Response, next: NextFunction)=>void
  getEnrolledCourseByUserId:(req: Request, res: Response, next: NextFunction)=>void
  isEnrolled:(req: Request, res: Response, next: NextFunction)=>void
}

export{
    TEnrollment,
    TEnrollmentController
}