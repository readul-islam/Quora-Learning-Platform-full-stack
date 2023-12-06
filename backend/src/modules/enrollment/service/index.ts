import Enrollment from "../../../models/enrollment";
import { AppError } from "../../../utils";

const userEnrollInCourse = async (reqBody: any) => {
  console.log(reqBody);
  const isExist = await Enrollment.findOne({ userId: reqBody.userId, courseId:reqBody.courseId });
  if (isExist) {
    throw new AppError("Enrollment already exists", 400);
  }
  const enrollment = await Enrollment.create(reqBody);
  return enrollment;
};

const getEnrolledCourseByUserId = async (query: any) => {
  const { userId } = query;
  const enrollment = await Enrollment.find({
    userId: userId,
  });
  return enrollment;
};

const isEnrolled = async (query: any) => {
  const { userId ,courseId} = query;
  console.log(query)

  const isExist = await Enrollment.findOne({ userId: userId, courseId:courseId });

  if (isExist) {
    return true;
  }
  return false;
};

export { userEnrollInCourse, getEnrolledCourseByUserId, isEnrolled };
