"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnrolled = exports.getEnrolledCourseByUserId = exports.userEnrollInCourse = void 0;
const enrollment_1 = __importDefault(require("../../../models/enrollment"));
const utils_1 = require("../../../utils");
const userEnrollInCourse = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(reqBody);
    const isExist = yield enrollment_1.default.findOne({
        userId: reqBody.userId,
        courseId: reqBody.courseId,
    });
    console.log(isExist);
    if (isExist) {
        throw new utils_1.AppError("Enrollment already exists", 400);
    }
    const enrollment = yield enrollment_1.default.create(reqBody);
    console.log(enrollment, "hjhh");
    return enrollment;
});
exports.userEnrollInCourse = userEnrollInCourse;
const getEnrolledCourseByUserId = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = query;
    const enrollment = yield enrollment_1.default.find({
        userId: userId,
    });
    return enrollment;
});
exports.getEnrolledCourseByUserId = getEnrolledCourseByUserId;
const isEnrolled = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, courseId } = query;
    console.log(query);
    const isExist = yield enrollment_1.default.findOne({
        userId: userId,
        courseId: courseId,
    });
    if (isExist) {
        return true;
    }
    return false;
});
exports.isEnrolled = isEnrolled;
