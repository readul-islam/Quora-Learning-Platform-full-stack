import Aws from "aws-sdk";
import multer from "multer";

import {
  aws_access_key,
  aws_secret_access_key,
  cloud_front_id,
  my_bucket,
} from "../config";
import { NextFunction } from "express";
// Set up Multer for file uploads
const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

// Set up AWS credentials and S3 instance
const s3 = new Aws.S3({
  accessKeyId: aws_access_key,
  secretAccessKey: aws_secret_access_key,
  region: "us-east-1",
});

const uploadVideo = async (req: any, next: NextFunction) => {

  try {
    // Upload video to S3
    const params: any = {
      Bucket: my_bucket,
      Key: `${req.file.originalname}`,
      Body: req.file.buffer,
      ContentType: "video/*", // Adjust the content type based on your video format
    };

    console.log(params);

    const data = await s3.upload(params).promise();
    console.log(data);
    // Retrieve CloudFront API (replace with your CloudFront distribution ID)
    const cloudFrontApi = `${cloud_front_id}/${data.Key}`;
    if (data) {
      return cloudFrontApi;
    }
  } catch (error) {
    return next(error);
  }
};

export default uploadVideo;
