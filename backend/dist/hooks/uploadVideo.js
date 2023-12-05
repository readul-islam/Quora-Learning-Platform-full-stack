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
exports.upload = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const multer_1 = __importDefault(require("multer"));
const config_1 = require("../config");
// Set up Multer for file uploads
const storage = multer_1.default.memoryStorage();
exports.upload = (0, multer_1.default)({ storage: storage });
// Set up AWS credentials and S3 instance
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: config_1.aws_access_key,
    secretAccessKey: config_1.aws_secret_access_key,
    region: "us-east-1",
});
const uploadVideo = (req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Upload video to S3
        const params = {
            Bucket: config_1.my_bucket,
            Key: `${req.file.originalname}`,
            Body: req.file.buffer,
            ContentType: "video/*", // Adjust the content type based on your video format
        };
        console.log(params);
        const data = yield s3.upload(params).promise();
        console.log(data);
        // Retrieve CloudFront API (replace with your CloudFront distribution ID)
        const cloudFrontApi = `${config_1.cloud_front_id}/${data.Key}`;
        if (data) {
            return cloudFrontApi;
        }
    }
    catch (error) {
        return next(error);
    }
});
exports.default = uploadVideo;
