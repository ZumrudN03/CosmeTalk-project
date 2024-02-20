import { UserModel } from "../model/userModel.js";
import bcrypt from "bcrypt";

export const GetAllUsers = async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

export const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

export const CreateOneUser = async (req, res) => {
  try {
    const { profilePhoto, username, password, email } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    const newUser = new UserModel({
      profilePhoto,
      username,
      password: hash,
      email,
    });
    await newUser.save();
    res.send("New User Created!");
  } catch (error) {
    res.send(error.message);
  }
};

export const UpdateUserByID = async (req, res) => {
  try {
    const { profilePhoto, username, password, email } = req.body;
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, {
      profilePhoto,
      username,
      password,
      email,
    });
    res.send("User Updated!");
  } catch (error) {
    res.send(error.message);
  }
};

export const DeleteUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    res.send("User Deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
