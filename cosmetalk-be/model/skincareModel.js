import mongoose, { Schema } from "mongoose";

const skincareSchema = new Schema({
  thumbnail: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  name: String,
  about: String,
  category: String,
  subCategory:String,
  brand: String,
  packSize: String,
  price: Number,
  texture: Number,
  application: Number,
  effect: Number,
});

export const SkincareModel = mongoose.model("Skincare", skincareSchema);
