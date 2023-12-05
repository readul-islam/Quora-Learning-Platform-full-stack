import Joi from "joi";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailMessage =
  "Invalid email Address. try to [ user@example.com, alice_smith@company.co.uk, my.email@domain.com ] way";

const userNameValidator = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/, { name: "capitalize" }),
  lastName: Joi.string().required().trim(),
});

const userAddressValidator = Joi.object({
  street: Joi.string().required().trim(),
  city: Joi.string().required().trim(),
  country: Joi.string().required().trim(),
});

const userValidator = Joi.object({
  password: Joi.string().required().trim(),
  email: Joi.string().trim().regex(emailRegex).message(emailMessage).required(),
});

export default userValidator;
