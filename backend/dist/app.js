"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const corsOpts = {
    origin: ["http://localhost:5174/", "*"],
};
// app parser
app.use((0, cors_1.default)(corsOpts));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// db connection
(0, db_1.default)();
// app route
app.use("/api", routes_1.default);
exports.default = app;
