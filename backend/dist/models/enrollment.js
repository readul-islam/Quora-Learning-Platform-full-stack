"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const enrollmentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "userId is required"],
        unique: true,
        ref: "user",
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "courseId  is required"],
        unique: true,
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
const Enrollment = (0, mongoose_1.model)("enrollment", enrollmentSchema);
exports.default = Enrollment;
