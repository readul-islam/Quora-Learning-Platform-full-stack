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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = exports.authenticateUser = void 0;
const models_1 = require("../../../models");
const generateSignInToken_1 = __importDefault(require("../../../hooks/generateSignInToken"));
const utils_1 = require("../../../utils");
const user_validator_1 = __importDefault(require("../helper/user.validator"));
const comparePassword_1 = __importDefault(require("../../../hooks/comparePassword"));
// create a new user
const createNewUser = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_validator_1.default.validate(reqBody);
    if (yield models_1.User.isUserExists(reqBody.email)) {
        throw new utils_1.AppError("User already exist!", 400);
    }
    if (result.error) {
        throw new utils_1.AppError(result.error.toString(), 400);
    }
    else {
        let user = yield models_1.User.create(result.value);
        const _a = user.toObject(), { password } = _a, rest = __rest(_a, ["password"]);
        return rest;
    }
});
exports.createNewUser = createNewUser;
// authenticateUser for login
const authenticateUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(email, password);
    const user = yield models_1.User.findOne({ email });
    if (user) {
        const verified = (0, comparePassword_1.default)(password, user.password);
        if (verified) {
            const { accessToken, refreshToken } = (0, generateSignInToken_1.default)(user);
            const _b = user.toObject(), { password } = _b, rest = __rest(_b, ["password"]);
            return {
                refreshToken,
                userReturn: {
                    user: rest,
                    token: accessToken,
                    refreshToken,
                },
            };
        }
        throw new utils_1.AppError(`Incorrect password supplied for user with email address ${email}`, 404);
    }
    throw new utils_1.AppError(`User with ${email} not found`, 404);
});
exports.authenticateUser = authenticateUser;
