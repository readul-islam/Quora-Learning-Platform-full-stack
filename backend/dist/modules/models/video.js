"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videosSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    video_url: {
        type: String,
        required: [true, "Url is required"],
    },
    thumbnail_url: {
        type: String,
        required: [true, "Url is required"],
    },
    watched: {
        type: Number,
        default: 0,
    },
});
const Video = (0, mongoose_1.model)("Video", videosSchema);
exports.default = Video;
