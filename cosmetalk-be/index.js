import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import "dotenv/config";
import { makeupRoute } from "./routers/makeupRouter.js";
import { skincareRoute } from "./routers/skincareRouter.js";
import { blogRoute } from "./routers/blogRouter.js";
import { userRoute } from "./routers/userRouter.js";
import { authRoute } from "./routers/authRouter.js";
import { makeupReviewRoute } from "./routers/makeupReviewRouter.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/makeup", makeupRoute);
app.use("/skincare", skincareRoute);
app.use("/blog", blogRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/makeupreview", makeupReviewRoute);
app.use("/static", express.static("public"));

mongoose
  .connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
