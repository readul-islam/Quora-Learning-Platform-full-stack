"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
// notFound handler
app_1.default.use("*", middleware_1.notFound);
app_1.default.use(middleware_1.globalErrorHandler);
app_1.default.listen(config_1.port, () => {
    console.log(`Server started on port ${config_1.port}`);
});
