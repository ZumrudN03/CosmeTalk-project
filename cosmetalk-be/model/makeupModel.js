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
  comments: [{ type: Schema.Types.ObjectId, ref: "MakeUpReview" }]
});

export const MakeupModel = mongoose.model("Makeup", makeupSchema);
