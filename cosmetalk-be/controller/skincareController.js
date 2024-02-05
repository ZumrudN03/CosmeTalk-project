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

export const PostOneSkinCareProduct = async (req, res) => {
  try {
    const {
      name,
      about,
      category,
      brand,
      price,
      packSize,
      TestedOnAnimals,
      whereToBuy,
      texture,
      effect,
      application
    } = req.body;
    const newSkinCare = new SkincareModel({
      name,
      about,
      category,
      brand,
      price,
      packSize,
      TestedOnAnimals,
      whereToBuy,
      effect,
      texture,
      application,
    });
    await newSkinCare.save();
    res.send("New SkinCare Product Added!");
  } catch (error) {
    res.send(error.message);
  }
};

export const UpdateSkinCareProductByID = async (req, res) => {
  try {
    const {
        name,
        about,
        category,
        brand,
        price,
        packSize,
        TestedOnAnimals,
        whereToBuy,
        texture,
        effect,
        application
    } = req.body;
    const { id } = req.params;
    const skincare = await SkincareModel.findByIdAndUpdate(id, {
        name,
        about,
        category,
        brand,
        price,
        packSize,
        TestedOnAnimals,
        whereToBuy,
        texture,
        effect,
        application
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
