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
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("../../../middleware");
const utils_1 = require("../../../utils");
const service_1 = require("../service");
class EnrollmentController {
    userEnrollInCourse(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const enroll = yield (0, service_1.userEnrollInCourse)(req.body);
                if (enroll) {
                    (0, middleware_1.SuccessResponse)(res, enroll, "Enrolled successfully");
                }
                else {
                    throw new utils_1.AppError("something went wrong", 400);
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    getEnrolledCourseByUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const enrollList = yield (0, service_1.getEnrolledCourseByUserId)(req.query);
                (0, middleware_1.SuccessResponse)(res, enrollList, "Enrolled Course fetched successfully");
            }
            catch (error) {
                next(error);
            }
        });
    }
    isEnrolled(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exist = yield (0, service_1.isEnrolled)(req.query);
                if (exist) {
                    (0, middleware_1.SuccessResponse)(res, { isExist: true }, "You're already enrolled in course.");
                }
                else {
                    (0, middleware_1.SuccessResponse)(res, { isExist: false }, "You're not enrolled in course");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new EnrollmentController;
