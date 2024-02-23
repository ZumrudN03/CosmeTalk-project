import { MakeupModel } from "../model/makeupModel.js";
import { MakeUpReviewModel } from "../model/makeupReviewModel.js";

export const GetAllMakeUpProducts = async (req, res) => {
  try {
    const makeup = await MakeupModel.find({});
    res.send(makeup);
  } catch (error) {
    res.send(error.message);
  }
};

export const GetMakeUpProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const makeup = await MakeupModel.findById(id);
    res.send(makeup);
  } catch (error) {
    res.send(error.message);
  }
};

export const CreateOneMakeUpProduct = async (req, res) => {
  try {
    const {
      thumbnail,
      name,
      about,
      category,
      subCategory,
      brand,
      price,
      pigmentation,
      texture,
      application,
      longevity,
    } = req.body;
    const newMakeup = new MakeupModel({
      thumbnail,
      name,
      about,
      category,
      subCategory,
      brand,
      price,
      pigmentation,
      texture,
      application,
      longevity,
    });
    await newMakeup.save();
    res.send("New MakeUp Product Created!");
  } catch (error) {
    res.send(error.message);
  }
};

export const UpdateMakeUpProductByID = async (req, res) => {
  try {
    const {
      thumbnail,
      name,
      about,
      category,
      subCategory,
      brand,
      price,
      pigmentation,
      texture,
      application,
      longevity,
    } = req.body;
    const { id } = req.params;
    const makeup = await MakeupModel.findByIdAndUpdate(id, {
      thumbnail,
      name,
      about,
      category,
      subCategory,
      brand,
      price,
      pigmentation,
      texture,
      application,
      longevity,
    });
    res.send("MakeUp Product Updated!");
  } catch (error) {
    res.send(error.message);
  }
};

export const DeleteMakeUpProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const makeup = await MakeupModel.findByIdAndDelete(id);
    res.send("MakeUp Product Deleted!");
  } catch (error) {
    res.send(error.message);
  }
};

export const GetMakeUpProductWithComments = async (req, res) => {
  try {
    const { id } = req.params;
    const makeup = await MakeUpReviewModel.find({ makeupId: id }).populate(
      "userId",
      "-password"
    );
    if (!makeup) {
      return res.status(404).send("Makeup Product not found");
    }

    res.send(makeup);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
