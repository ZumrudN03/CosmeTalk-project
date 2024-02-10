import mongoose, { Schema } from "mongoose";

const skincareSchema = new Schema({
  thumbnail: String,
  image: String,
  image: String,
  image: String,
  image: String,
  name: String,
  about: String,
  category: String,
  brand: String,
  price: Number,
  packSize: String,
  TestedOnAnimals: String,
  whereToBuy: String,
  texture: Number,
  application: Number,
  effect: Number,
});

export const SkincareModel = mongoose.model("Skincare", skincareSchema);
