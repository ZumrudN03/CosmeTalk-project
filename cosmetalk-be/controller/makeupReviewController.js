import mongoose from "mongoose";
import { MakeUpReviewModel } from "../model/makeupReviewModel.js";
import { MakeupModel } from "../model/makeupModel.js";
import { SkincareModel } from "../model/skincareModel.js";


export const createCommentForMakeup = async (req, res) => {
  try {
    const { userId, makeupId, skincareId, content, rating } = req.body;

    if (makeupId) {
      const newComment = new MakeUpReviewModel({ userId, makeupId, content, rating });
      await newComment.validate();
      await newComment.save();

      const makeup = await MakeupModel.findById(makeupId);
      makeup.comments.push(newComment._id);
      await makeup.save();

      return res.send("New comment created successfully");
    }

    const newComment = new MakeUpReviewModel({ userId, skincareId, content, rating });
    await newComment.validate();
    await newComment.save();

    const skincare = await SkincareModel.findById(skincareId);
    skincare.comments.push(newComment._id);
    await skincare.save();

    return res.send("New comment created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const getAvarageForMakeUp = async (req, res) => {
  try {
    const { makeupId ,skincareId} = req.body;
   if (makeupId) {
    const rating = await MakeUpReviewModel.aggregate([
      { $match: { makeupId: new mongoose.Types.ObjectId(makeupId) } },
      { $group: { _id: null, averageRating: { $avg: "$rating" } } },
    ]);
    return  res.send(rating);
    
   }
   const rating = await MakeUpReviewModel.aggregate([
    { $match: { skincareId: new mongoose.Types.ObjectId(skincareId) } },
    { $group: { _id: null, averageRating: { $avg: "$rating" } } },
  ]);
    res.send(rating);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getCommentsForMakeup = async (req, res) => {
  try {
    const { makeupId } = req.params;
    const comment = await MakeUpReviewModel.findById(makeupId).populate("userId");
    console.log(comment);
    res.send(comment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateCommentForMakeup = async (req, res) => {
  try {
    const { userId, makeupId, comment } = req.body;
    const existingComment = await MakeUpReviewModel.findOne({ userId, makeupId });

    if (!existingComment) {
      return res.status(404).send("Comment not found");
    }

    existingComment.comment = comment;
    await existingComment.save();
    res.send("Comment updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCommentForMakeUp = async (req, res) => {
  try {
    const { userId, makeupId } = req.body;
    await MakeUpReviewModel.deleteOne({ userId, makeupId });
    res.send("Comment deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};