"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./modules/user/routes"));
const routes_2 = __importDefault(require("./modules/course/routes"));
const routes_3 = __importDefault(require("./modules/enrollment/routes"));
const appRouter = express_1.default.Router();
// user routes 
appRouter.use(routes_1.default);
// course routes
appRouter.use(routes_2.default);
// enrollment routes
appRouter.use(routes_3.default);
exports.default = appRouter;
