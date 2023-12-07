import jwt from "jsonwebtoken";
import { access_secret_token, refresh_secret_token } from "../config";

function generateSignInToken(userInstance: any, expiryHour = 2) {
  //creating a access token
  const accessToken = jwt.sign(
    {
      userId: userInstance._id,
      email: userInstance.email,
    },
    access_secret_token as string,
    {
      expiresIn: `${expiryHour}h`,
    }
  );

  // Creating refresh token not that expiry of refresh
  //token is greater than the access token
  const refreshToken = jwt.sign(
    {
      userId: userInstance._id,
      email: userInstance.email,
    },
    refresh_secret_token as string,
    { expiresIn: "3d" }
  );

  return { accessToken, refreshToken };
}

export default generateSignInToken;
