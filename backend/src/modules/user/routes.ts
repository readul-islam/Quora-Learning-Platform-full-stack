import express from "express";
import AuthController from "./controller/Auth";
const router = express.Router();
const userRouter = express.Router();

// crate a user
userRouter.post("/register", AuthController.register);
// authorize a user for login
userRouter.post("/login", AuthController.login);

router.use("/user", userRouter);

export default router;
