import cors from "cors";
import express, { Application } from "express";
import dbConnection from "./config/db";
import appRouter from "./routes";
const app: Application = express();

// app parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnection();

// app route
app.use("/api", appRouter);

export default app;
