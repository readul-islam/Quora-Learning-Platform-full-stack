"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("./controller/Auth"));
const router = express_1.default.Router();
const userRouter = express_1.default.Router();
// crate a user
userRouter.post("/register", Auth_1.default.register);
// authorize a user for login
userRouter.post("/login", Auth_1.default.login);
router.use("/user", userRouter);
exports.default = router;
