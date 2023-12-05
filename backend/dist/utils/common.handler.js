"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.SuccessResponse = exports.ErrorResponse = void 0;
// this is alternative custom handler for sending same structure data to client for successful responses
const SuccessResponse = (res, data, message) => {
    res.status(200).json({ success: true, message, data });
};
exports.SuccessResponse = SuccessResponse;
// this is alternative custom handler for sending same structure data to client for error response
const ErrorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({ success: false, message, error: {
            code: statusCode,
            description: message,
        } });
};
exports.ErrorResponse = ErrorResponse;
// Custom throw Error
class AppError {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}
exports.AppError = AppError;
