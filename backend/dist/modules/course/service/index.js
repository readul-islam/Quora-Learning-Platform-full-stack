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
exports.searchCourses = exports.uploadCourseSyllabusVideo = exports.getCourses = exports.getCourse = exports.createNewCourse = void 0;
const course_1 = __importDefault(require("../../../models/course"));
const createNewCourse = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    //   const uploadUrl = await uploadVideo(req, next);
    // console.log(uploadUrl)
    const course = yield course_1.default.create(Object.assign({}, req.body));
    return course;
});
exports.createNewCourse = createNewCourse;
const getCourse = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield course_1.default.findById(query.courseId);
});
exports.getCourse = getCourse;
const getCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield course_1.default.find();
});
exports.getCourses = getCourses;
const uploadCourseSyllabusVideo = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const uploadUrl = await uploadVideo(req, next);
    // console.log(uploadUrl)
    const { courseId, syllabusId } = req.params;
    const newVideo = yield course_1.default.findOneAndUpdate({ _id: courseId, syllabus: { $elemMatch: { _id: syllabusId } } }, { $push: { "syllabus.$.videos": req.body } }, { returnOriginal: false, upsert: true, new: true }
    // {upsert: true, new : true})
    );
    return newVideo;
});
exports.uploadCourseSyllabusVideo = uploadCourseSyllabusVideo;
const searchCourses = (searchQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = searchQuery;
    let regex = new RegExp("^" + query, "i");
    const result = yield course_1.default.find({
        $or: [{ name: regex }, { instructor: regex }],
    });
    console.log(result);
    return result;
});
exports.searchCourses = searchCourses;
