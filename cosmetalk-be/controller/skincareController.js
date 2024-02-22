import { SkincareModel } from "../model/skincareModel.js";

export const GetAllSkinCareProducts = async (req, res) => {
  try {
    const skincare = await SkincareModel.find({});
    res.send(skincare);
  } catch (error) {
    res.send(error.message);
  }
};

export const GetSkinCareProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const skincare = await SkincareModel.findById(id);
    res.send(skincare);
  } catch (error) {
    res.send(error.message);
  }
};

export const CreateOneSkinCareProduct = async (req, res) => {
  try {
    const {
      thumbnail,
      name,
      about,
      category,
      brand,
      packSize,
      price,
      texture,
      application,
      effect,
    } = req.body;
    const newSkinCare = new SkincareModel({
      thumbnail,
      name,
      about,
      category,
      brand,
      packSize,
      price,
      texture,
      application,
      effect,
    });
    await newSkinCare.save();
    res.send("New SkinCare Product Created!");
  } catch (error) {
    res.send(error.message);
  }
};

export const UpdateSkinCareProductByID = async (req, res) => {
  try {
    const {
      thumbnail,
      name,
      about,
      category,
      brand,
      packSize,
      price,
      texture,
      application,
      effect,
    } = req.body;
    const { id } = req.params;
    const skincare = await SkincareModel.findByIdAndUpdate(id, {
      thumbnail,
      name,
      about,
      category,
      brand,
      packSize,
      price,
      texture,
      application,
      effect,
    });
    res.send("SkinCare Product Updated!");
  } catch (error) {
    res.send(error.message);
  }
};

export const DeleteSkinCareProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const skincare = await SkincareModel.findByIdAndDelete(id);
    res.send("SkinCare Product Deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
