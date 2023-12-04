import { number } from "joi";
import mongoose, { Schema, model } from "mongoose";

type TVideo = {
  name: string;
  video_url: string;
  thumbnail_url: string;
  watched: number;
};

const videosSchema = new Schema<TVideo>({
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

const Video = model("Video", videosSchema);
export default Video;
