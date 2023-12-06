import { NextFunction, Request } from "express";
import uploadVideo from "../../../hooks/uploadVideo";
import Course from "../../../models/course";

const createNewCourse = async (req: Request, next: NextFunction) => {
  //   const uploadUrl = await uploadVideo(req, next);
  // console.log(uploadUrl)
  const course = await Course.create({
    ...req.body,
    // introUrl: uploadUrl,
  });

  return course;
};

const getCourse = async (query: { courseId: string }) => {
  return await Course.findById(query.courseId);
};

const getCourses = async () => {
  return await Course.find();
};

const updateCourse = async () => {};

const searchCourses = async (searchQuery: any) => {
  const { query } = searchQuery;

  let regex = new RegExp("^" + query, "i");

  const result = await Course.find({
    $or: [{ name: regex }, { instructor: regex }],
  });
  console.log(result);

  return result;
};

export { createNewCourse, getCourse, getCourses, updateCourse, searchCourses };
