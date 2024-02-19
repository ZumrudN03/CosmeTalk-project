import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  profilePhoto: String,
  username: String,
  password:String,
  email: { type: String, unique: true },
  role: { type: String, default: "user" }
});

export const UserModel = mongoose.model("User", userSchema);
