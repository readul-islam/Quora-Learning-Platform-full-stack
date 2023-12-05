import bcrypt from "bcrypt";
import { User } from "../../../models";
import generateSignInToken from "../../../hooks/generateSignInToken";
import { AppError } from "../../../utils";
import userValidator from "../helper/user.validator";
import comparePassword from "../../../hooks/comparePassword";

// create a new user
const createNewUser = async (reqBody: any) => {
  const result = userValidator.validate(reqBody);

  if (await User.isUserExists(reqBody.email)) {
    throw new AppError("User already exist!", 400);
  }
  if (result.error) {
    throw new AppError(result.error.toString(), 400);
  } else {
    let user = await User.create(result.value);
    const { password, ...rest } = user.toObject();

    return rest;
  }
};

// authenticateUser for login
const authenticateUser = async (email: string, password: string) => {
  console.log(email, password);

  const user = await User.findOne({ email });

  if (user) {
    const verified = comparePassword(password, user.password);

    if (verified) {
      const { accessToken, refreshToken } = generateSignInToken(user);
      const { password, ...rest } = user.toObject();
      return {
        refreshToken,
        userReturn: {
          user: rest,
          token: accessToken,
          refreshToken,
        },
      };
    }
    throw new AppError(
      `Incorrect password supplied for user with email address ${email}`,
      404
    );
  }
  throw new AppError(`User with ${email} not found`, 404);
};

export { authenticateUser, createNewUser };
