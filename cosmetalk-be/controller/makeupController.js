import { MakeupModel } from "../model/makeupModel.js";

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
      image1,
      image2,
      image3,
      image4,
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
      image1,
      image2,
      image3,
      image4,
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
      image1,
      image2,
      image3,
      image4,
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
      image1,
      image2,
      image3,
      image4,
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
