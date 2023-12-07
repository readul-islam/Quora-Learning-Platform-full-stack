import express from "express";
import userRoutes from "./modules/user/routes";
import courseRoutes from "./modules/course/routes";
import enrollmentRoutes from "./modules/enrollment/routes"
const appRouter = express.Router();

// user routes 
appRouter.use(userRoutes)
// course routes
appRouter.use(courseRoutes)
// enrollment routes
appRouter.use(enrollmentRoutes)


export default appRouter;

