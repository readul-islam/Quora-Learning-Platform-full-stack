import { Schema, model } from "mongoose";
import {
  TCourse,
  TSyllabus,
  TVideo,
} from "../modules/course/helper/course.interface";

const videoSchema = new Schema<TVideo>({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  videoUrl: {
    type: String,
    required: [true, "videoUrl is required"],
  },
});

const syllabusSchema = new Schema<TSyllabus>({
  week: {
    type: Number,
    required: [true, "week is required"],
  },
  topic: {
    type: String,
    require: [true, "topic is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  videos: {
    type: videoSchema,
  },
});

const courseSchema = new Schema<TCourse>({
  name: {
    type: String,
    trim: true,
    required: [true, "name is required"],
    maxlength: [150, "name can not be more than 20 characters"],
  },
  instructor: {
    type: String,
    required: [true, "instructor is required"],
    maxlength: [50, "firstName can not be more than 50 characters"],
  },
  description: String,
  enrollmentStatus: {
    type: String,
    enum: ["Open", "Closed", "In Progress"],
  },
  thumbnail: String,
  introUrl: String,
  preRequisites: {
    type: [String],
    require: [true, "Pre-requisites is required"],
  },
  syllabus: {
    type: syllabusSchema,
    required: [true, "Syllabus is required"],
  },
  totalReaction: {
    type: Number,
    default: 0,
  },
});

const Course = model<TCourse>("course", courseSchema);
export default Course;
