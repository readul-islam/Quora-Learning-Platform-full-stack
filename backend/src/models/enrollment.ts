import { Schema, model } from "mongoose";
import { TEnrollment } from "../modules/enrollment/helper/enrollment.interface";

const enrollmentSchema = new Schema<TEnrollment>({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "userId is required"],

    ref: "user",
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: [true, "courseId  is required"],

    ref: "course",
  },
  courseTitle: {
    type: String,
    required: [true, "courseTitle is required"],
  },
  thumbnail: {
    type: String,
    required: [true, "thumbnail is required"],
  },
  introUrl: {
    type: String,
    required: [true, "introUrl is required"],
  },
  userName: String,
  userEmail: {
    type: String,
    required: [true, "userEmail is required"],
  },
  instructorName: {
    type: String,
    required: [true, "instructorName is required"],
  },
  status: {
    type: String,
    enum: ["Open", "Closed", "In Progress"],
  },
});

const Enrollment = model<TEnrollment>("enrollment", enrollmentSchema);
export default Enrollment;
