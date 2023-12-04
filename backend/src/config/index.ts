import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const bcrypt_salt = 10;

const access_key=process.env.ACCESS_KEY
const secret_access_key=process.env.SECRET_ACCESS_KEY
const my_bucket=process.env.MY_BUCKET
const cloud_front_id=process.env.CLOUD_FRONT_ID

export { DB_URL, bcrypt_salt, port, access_key, secret_access_key, my_bucket,cloud_front_id};
