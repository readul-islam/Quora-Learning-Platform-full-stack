import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

// user scheme type
interface TUserFullName {
  firstName: string;
  lastName: string;
}
interface TUserAddress {
  street: string;
  city: string;
  country: string;
}

interface TUserSchema {
  password: string;
  fullName: TUserFullName;
  age: number;
  email: string;

  address: TUserAddress;
}

// user controller type
interface TUserController {
  createUser(req: Request, res: Response, next: NextFunction): void;
  getUsers(req: Request, res: Response, next: NextFunction): void;
  updateUser(req: Request, res: Response, next: NextFunction): void;
  removeUser(req: Request, res: Response, next: NextFunction): void;
  getUserOrders(req: Request, res: Response, next: NextFunction): void;
  updateUserOrder(req: Request, res: Response, next: NextFunction): void;
  updateUserOrder(req: Request, res: Response, next: NextFunction): void;
  updateUserOrder(req: Request, res: Response, next: NextFunction): void;
  getTotalAmountOfOrder(req: Request, res: Response, next: NextFunction): void;
}

// create a static method interface
export interface UserModel extends Model<TUserSchema> {
  isUserExists(id: string): Promise<TUserSchema | null>;
}

type TAuth = {
  login(req: Request, res: Response, next: NextFunction): void;
  register(req: Request, res: Response, next: NextFunction): void;
};

export { TUserController, TUserFullName, TUserAddress,TAuth, TUserSchema };
