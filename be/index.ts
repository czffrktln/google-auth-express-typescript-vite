import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import login from "./routes/login"
import secret from "./routes/secret"
import cors from 'cors'
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use('/api/login', login)
app.use("/api/secret", secret)

const mongourl = process.env.MONGO_URL as string
//zoddal validalni env 

mongoose.connect(mongourl)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
