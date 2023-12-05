"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
function generateSignInToken(userInstance, expiryHour = 2) {
    //creating a access token
    const accessToken = jsonwebtoken_1.default.sign({
        userId: userInstance._id,
        email: userInstance.email,
    }, config_1.access_secret_token, {
        expiresIn: `${expiryHour}h`,
    });
    // Creating refresh token not that expiry of refresh
    //token is greater than the access token
    const refreshToken = jsonwebtoken_1.default.sign({
        userId: userInstance._id,
        email: userInstance.email,
    }, config_1.refresh_secret_token, { expiresIn: "3d" });
    return { accessToken, refreshToken };
}
exports.default = generateSignInToken;
