import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  thumbnail: String,
  title: String,
  desc: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image5: String,
  sub1: String,
  sub2: String,
  sub3: String,
  sub4: String,
  sub5: String,
  name1: String,
  name2: String,
  name3: String,
  name4: String,
  name5: String,
});

export const BlogModel = mongoose.model("Blog", blogSchema);
