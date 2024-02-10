import mongoose, { Schema } from "mongoose";

const makeupSchema = new Schema({
  thumbnail: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  name: String,
  about: String,
  category: String,
  subCategory: String,
  brand: String,
  price: Number,
  packSize: String,
  pigmentation: Number,
  texture: Number,
  application: Number,
  longevity: Number,
});

export const MakeupModel = mongoose.model("Makeup", makeupSchema);
