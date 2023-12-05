import cors from "cors";
import express, { Application } from "express";
import dbConnection from "./config/db";
import appRouter from "./routes";
const app: Application = express();

const corsOpts = {
  origin: ["http://localhost:5174/", "*"],

}
// app parser
app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnection();

// app route
app.use("/api", appRouter);

export default app;
