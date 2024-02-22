import mongoose, { Schema } from "mongoose";

const makeupSchema = new Schema({
  thumbnail: String,
  name: String,
  about: String,
  category: String,
  subCategory: String,
  brand: String,
  price: Number,
  pigmentation: Number,
  texture: Number,
  application: Number,
  longevity: Number,
});

export const MakeupModel = mongoose.model("Makeup", makeupSchema);
