import { NextFunction, Request, Response } from "express";
import generateSignInToken from "../../../hooks/generateSignInToken";
import { SuccessResponse } from "../../../middleware";
import { AppError } from "../../../utils";
import { TAuth } from "../helper/user.interface";
import userValidator from "../helper/user.validator";
import { authenticateUser, createNewUser } from "../service";

class Auth implements TAuth {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = userValidator.validate(req.body);
      if (result.error) {
        throw new AppError(result.error.toString(), 400);
      }
      const { email, password } = result.value;
      const user = await authenticateUser(email, password);

      SuccessResponse(res, user.userReturn, "User Login Successfully");
    } catch (err) {
      next(err);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await createNewUser(req.body);
      const token = generateSignInToken(user);
      SuccessResponse(res, { user, token }, "User Login Successfully");
    } catch (err) {
      next(err);
    }
  }
}

export default new Auth();
