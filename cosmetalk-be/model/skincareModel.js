import mongoose, { Schema } from "mongoose";

const skincareSchema = new Schema({
  thumbnail: String,
  name: String,
  about: String,
  category: String,
  brand: String,
  packSize: String,
  price: Number,
  texture: Number,
  application: Number,
  effect: Number, 
});

export const SkincareModel = mongoose.model("Skincare", skincareSchema);
