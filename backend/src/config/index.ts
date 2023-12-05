import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const bcrypt_salt = 10;

const aws_access_key = process.env.AWS_ACCESS_KEY;
const access_secret_token = process.env.ACCESS_TOKEN_SECRET;
const refresh_secret_token = process.env.ACCESS_TOKEN_SECRET;
const aws_secret_access_key = process.env.SECRET_ACCESS_KEY;
const my_bucket = process.env.MY_BUCKET;
const cloud_front_id = process.env.CLOUD_FRONT_ID;

export {
  DB_URL,
  aws_access_key,
  access_secret_token,
  refresh_secret_token,
  bcrypt_salt,
  cloud_front_id,
  my_bucket,
  port,
  aws_secret_access_key,
};
