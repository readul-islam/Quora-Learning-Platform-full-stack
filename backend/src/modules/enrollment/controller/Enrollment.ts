import { NextFunction, Request, Response } from "express";
import { ErrorResponse, SuccessResponse } from "../../../middleware";
import { AppError } from "../../../utils";
import {
  getEnrolledCourseByUserId,
  isEnrolled,
  userEnrollInCourse,
} from "../service";

class EnrollmentController {
  async userEnrollInCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const enroll = await userEnrollInCourse(req.body);
      if (enroll) {
        SuccessResponse(res, enroll, "Enrolled successfully");
      } else {
        throw new AppError("something went wrong", 400);
      }
    } catch (error) {
      next(error);
    }
  }
  async getEnrolledCourseByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const enrollList = await getEnrolledCourseByUserId(req.query);
      SuccessResponse(res, enrollList, "Enrolled Course fetched successfully");
    } catch (error) {
      next(error);
    }
  }
  async isEnrolled(req: Request, res: Response, next: NextFunction) {
    try {
        
        const exist = await isEnrolled(req.query);
      if (exist) {
        SuccessResponse(res, { isExist: true }, "You're already enrolled in course.");
      }else{
        SuccessResponse(res, { isExist: false }, "You're not enrolled in course");
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new EnrollmentController;
