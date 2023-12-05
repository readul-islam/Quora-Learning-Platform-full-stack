"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailMessage = "Invalid email Address. try to [ user@example.com, alice_smith@company.co.uk, my.email@domain.com ] way";
const userNameValidator = joi_1.default.object({
    firstName: joi_1.default.string()
        .required()
        .trim()
        .max(20)
        .regex(/^[A-Z][a-z]*$/, { name: "capitalize" }),
    lastName: joi_1.default.string().required().trim(),
});
const userAddressValidator = joi_1.default.object({
    street: joi_1.default.string().required().trim(),
    city: joi_1.default.string().required().trim(),
    country: joi_1.default.string().required().trim(),
});
const userValidator = joi_1.default.object({
    password: joi_1.default.string().required().trim(),
    email: joi_1.default.string().trim().regex(emailRegex).message(emailMessage).required(),
});
exports.default = userValidator;
