import express from "express";
import userRoutes from "./modules/user/routes";
import courseRoutes from "./modules/course/routes";

const appRouter = express.Router();

// user routes 
appRouter.use(userRoutes)
appRouter.use(courseRoutes)


export default appRouter;

