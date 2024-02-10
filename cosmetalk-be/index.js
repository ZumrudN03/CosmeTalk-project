import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { makeupRoute } from "./routers/makeupRouter.js";
import { skincareRoute } from "./routers/skincareRouter.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/makeup", makeupRoute);
app.use("/skincare", skincareRoute);

mongoose
  .connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
