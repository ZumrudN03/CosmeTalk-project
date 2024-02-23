import mongoose, { Schema } from "mongoose";

const makeupReviewSchema = new Schema(
  {
    makeupId: { type: Schema.Types.ObjectId, ref: "MakeUp" },
    skincareId: { type: Schema.Types.ObjectId, ref: "Skincare" },

    userId: { type: Schema.Types.ObjectId, ref: "User" },
    content: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

export const MakeUpReviewModel = mongoose.model(
  "MakeUpReview",
  makeupReviewSchema
);
