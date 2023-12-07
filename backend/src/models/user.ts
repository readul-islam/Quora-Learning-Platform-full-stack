import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { bcrypt_salt } from "../config";
import {
  TUserAddress,
  TUserFullName,
  TUserSchema,
  UserModel,
} from "../modules/user/helper/user.interface";

const fullNameSchema = new Schema<TUserFullName>(
  {
    firstName: {
      type: String,
      trim: true,

      maxlength: [20, "firstName can not be more than 20 characters"],
    },
    lastName: {
      type: String,
      trim: true,

      maxlength: [20, "lastName can not be more than 20 characters"],
    },
  },
  { _id: false }
);

const addressSchema = new Schema<TUserAddress>(
  {
    street: String,
    city: String,
    country: String,
  },
  { _id: false }
);

const userSchema = new Schema<TUserSchema>({
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  password: String,
  fullName: {
    type: fullNameSchema,
  },
  age: {
    type: Number,
  },

  address: {
    type: addressSchema,
  },
});

// secure our password by bcrypt
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(bcrypt_salt));
  next();
});

// hide password from response
userSchema.post("save", async function (user, next) {
  user.password = "";

  next();
});

//custom static method
userSchema.statics.isUserExists = async function (email: string) {
  const user = await User.findOne({ email: email });
  return user;
};

const User = model<TUserSchema, UserModel>("user", userSchema);

export default User;
