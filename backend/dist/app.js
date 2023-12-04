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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const db_1 = __importDefault(require("./config/db"));
const middleware_1 = require("./middleware");
const models_1 = require("./models");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
//
const multer = require("multer");
const fs = require("fs");
const path = require("path");
// app parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// db connection
(0, db_1.default)();
// app route
app.use("/api", routes_1.default);
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Set up Multer for file uploads
// const upload = multer({ storage: storage });
// Set up AWS credentials and S3 instance
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: config_1.access_key,
    secretAccessKey: config_1.secret_access_key,
    region: "us-east-1",
});
app.post("/upload", upload.single(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Upload video to S3
    const uploadParams = {
        Bucket: config_1.my_bucket,
        Key: `${req.file.originalname}`,
        Body: req.file.buffer,
        ContentType: "video/*", // Adjust the content type based on your video format
    };
    try {
        console.log(uploadParams);
        const data = yield s3.upload(uploadParams).promise();
        if (data) {
            console.log(data);
            const cloudFrontApi = `${config_1.cloud_front_id}/${data.Key}`;
            const saveVideo = yield models_1.Video.create({
                name: req.file.originalname,
                video_url: cloudFrontApi,
                thumbnail_url: "https://img.freepik.com/premium-psd/youtube-video-thumbnail-start-trading-today_475351-168.jpg",
            });
            res.send({ success: true, data: saveVideo });
        }
        // Retrieve CloudFront API (replace with your CloudFront distribution ID)
    }
    catch (error) { }
}));
app.get("/videos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield models_1.Video.find();
        res.send(videos);
    }
    catch (error) { }
}));
app.get("/", (req, res, next) => {
    try {
        const err = {
            message: "some error occurred",
            status: 404,
        };
        throw err;
    }
    catch (error) {
        next(error);
    }
    // res
    //   .status(200)
    //   .json({ success: true, message: "Server Working Successfully" });
});
// notFound handler
app.use("*", middleware_1.notFound);
app.use(middleware_1.globalErrorHandler);
exports.default = app;
