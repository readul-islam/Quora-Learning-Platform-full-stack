import { Schema, model } from "mongoose";
import { TEnrollment } from "../modules/enrollment/helper/enrollment.interface";

const enrollmentSchema = new Schema<TEnrollment>({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "userId is required"],
    unique: true,
    ref: "user",
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: [true, "courseId  is required"],
    unique: true,
    ref: "course",
  },
  courseTitle: String,
  thumbnail: String,
  introUrl: String,
  userName: String,
  userEmail: String,
  instructorName: String,
  status: {
    type: String,
    enum: ["Open", "Closed", "In Progress"],
  },
});

const Enrollment = model<TEnrollment>("enrollment", enrollmentSchema);
export default Enrollment;
