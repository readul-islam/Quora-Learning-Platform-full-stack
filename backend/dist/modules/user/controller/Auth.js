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
const generateSignInToken_1 = __importDefault(require("../../../hooks/generateSignInToken"));
const middleware_1 = require("../../../middleware");
const utils_1 = require("../../../utils");
const user_validator_1 = __importDefault(require("../helper/user.validator"));
const service_1 = require("../service");
class Auth {
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = user_validator_1.default.validate(req.body);
                if (result.error) {
                    throw new utils_1.AppError(result.error.toString(), 400);
                }
                const { email, password } = result.value;
                const user = yield (0, service_1.authenticateUser)(email, password);
                (0, middleware_1.SuccessResponse)(res, user.userReturn, "User Login Successfully");
            }
            catch (err) {
                next(err);
            }
        });
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.createNewUser)(req.body);
                const token = (0, generateSignInToken_1.default)(user);
                (0, middleware_1.SuccessResponse)(res, { user, token }, "User Login Successfully");
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new Auth();
