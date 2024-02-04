import mongoose, { Schema } from "mongoose";

const makeupSchema = new Schema({
    name: String,
    about: String,
    category: String,
    brand: String,
    price: Number,
    packSize: String,
    TestedOnAnimals: String,
    whereToBuy: String,
    pigmentation: Number,
    texture: Number,
    application: Number,
    longevity: Number,
  });
  
 export const MakeupModel = mongoose.model("Makeup", makeupSchema);