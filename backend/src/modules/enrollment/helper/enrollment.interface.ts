import { Types } from "mongoose";
import { TStatus } from "../../course/helper/course.interface";

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


export{
    TEnrollment
}