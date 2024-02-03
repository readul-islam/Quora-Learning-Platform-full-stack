import cors from "cors";
import express, { Application } from "express";
import dbConnection from "./config/db";
import appRouter from "./routes";
const app: Application = express();


// app parser
// app.use(cors());
const options = {
    origin: ["https://quora-frontend-kohl.vercel.app"],
   
    credentials: true,
  }

app.use(cors(options));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnection();

// app route
app.use("/api", appRouter);

export default app;
