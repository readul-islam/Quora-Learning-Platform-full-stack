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
exports.updateCourse = exports.getCourses = exports.getCourse = exports.createNewCourse = void 0;
const course_1 = __importDefault(require("../../../models/course"));
const createNewCourse = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const uploadUrl = await uploadVideo(req, next);
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
const updateCourse = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateCourse = updateCourse;
