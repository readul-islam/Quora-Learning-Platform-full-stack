import AWS from "aws-sdk";
import cors from "cors";
import express, { Application, Response } from "express";
import {
  access_key,
  cloud_front_id,
  my_bucket,
  secret_access_key,
} from "./config";
import dbConnection from "./config/db";
import { globalErrorHandler, notFound } from "./middleware";
import { Video } from "./models";
import appRouter from "./routes";
const app: Application = express();

//

const multer = require("multer");
const fs = require("fs");
const path = require("path");
// app parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnection();

// app route
app.use("/api", appRouter);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Set up Multer for file uploads
// const upload = multer({ storage: storage });

// Set up AWS credentials and S3 instance
const s3 = new AWS.S3({
  accessKeyId: access_key,
  secretAccessKey: secret_access_key,
  region: "us-east-1",
});

app.post("/upload", upload.single(), async (req: any, res: Response) => {
  // Upload video to S3
  const uploadParams: any = {
    Bucket: my_bucket,
    Key: `${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: "video/*", // Adjust the content type based on your video format
  };

  try {
    console.log(uploadParams);
    const data = await s3.upload(uploadParams).promise();

    if (data) {
      console.log(data);
      const cloudFrontApi = `${cloud_front_id}/${data.Key}`;

      const saveVideo = await Video.create({
        name: req.file.originalname,
        video_url: cloudFrontApi,
        thumbnail_url:
          "https://img.freepik.com/premium-psd/youtube-video-thumbnail-start-trading-today_475351-168.jpg",
      });

      res.send({ success: true, data: saveVideo });
    }

    // Retrieve CloudFront API (replace with your CloudFront distribution ID)
  } catch (error) {}
});

app.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.send(videos);
  } catch (error) {}
});
app.get("/", (req, res,next) => {
  try {
    const err={
      message:"some error occurred",
      status:404,
    }
    throw err;
  } catch (error) {
    next(error)
    
  }
  // res
  //   .status(200)
  //   .json({ success: true, message: "Server Working Successfully" });
});

// notFound handler
app.use("*", notFound);

app.use(globalErrorHandler);

export default app;
