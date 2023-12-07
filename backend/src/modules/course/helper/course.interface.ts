import { NextFunction, Request, Response } from "express";

type TVideo = {
  title: string;
  videoUrl: string;
};

type TSyllabus = {
  week: number;
  topic: string;
  description: string;
  videos: Array<TVideo>;
};

type TStatus = "Open" | "Closed" | "In Progress";

type TCourse = {
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: TStatus;
  thumbnail: string;
  introUrl: string;
  preRequisites: Array<string>;
  syllabus: Array<TSyllabus>;
  totalReaction: number;
};


type TCourseController={
  createNewCourse:(req: Request, res: Response, next: NextFunction)=>void
  getCourse:(req: Request, res: Response, next: NextFunction)=>void
  getCourses:(req: Request, res: Response, next: NextFunction)=>void
  uploadCourseSyllabusVideo:(req: Request, res: Response, next: NextFunction)=>void
  searchCourses:(req: Request, res: Response, next: NextFunction)=>void
}


export { TCourse, TStatus, TSyllabus, TVideo,TCourseController };
