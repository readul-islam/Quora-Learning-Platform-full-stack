import { upload } from "./../../../hooks/uploadVideo";
import { NextFunction, Request, Response } from "express";
import {
  AppError,
  ErrorResponse,
  SuccessResponse,
} from "../../../utils/common.handler";
import {
  createNewCourse,
  getCourse,
  getCourses,
  searchCourses,
  uploadCourseSyllabusVideo,
} from "../service";
import { TCourseController } from "../helper/course.interface";

class CourseController implements TCourseController {
  // create a new course
  async createNewCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const course = await createNewCourse(req, next);
      if (course) {
        SuccessResponse(res, course, "Course created successfully");
      } else {
        throw new AppError("something went wrong", 400);
      }
    } catch (error) {
      next(error);
    }
  }
  // get one course by courseId
  async getCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const course = await getCourse(req.query as { courseId: string });
      if (course) {
        SuccessResponse(res, course, "Course created successfully");
      } else {
        ErrorResponse(res, 404, "Course not found");
      }
    } catch (error) {
      next(error);
    }
  }
  // get all courses
  async getCourses(req: Request, res: Response, next: NextFunction) {
    try {
     
      const course = await getCourses();
      SuccessResponse(res, course, "Course fetched successfully");
    } catch (error) {}
  }
  // upload single video for course syllabus
  async uploadCourseSyllabusVideo(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const uploadVideo = await uploadCourseSyllabusVideo(req, next);
      SuccessResponse(res, uploadVideo, "Video uploaded successfully");
    } catch (error) {
      next(error);
    }
  }

  // filter on courses
  async searchCourses(req: Request, res: Response, next: NextFunction) {
    try {
      const courses = await searchCourses(req.query);
      SuccessResponse(res, courses, "Courses fetched successfully");
    } catch (error) {
      next(error);
    }
  }
}

export default new CourseController();
