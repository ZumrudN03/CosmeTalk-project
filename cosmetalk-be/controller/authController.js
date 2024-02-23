import { UserModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User Not Found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Wrong password" });
    }

    const token = jwt.sign(
      {
        name: user.username,
        image: user.profilePhoto,
        role: user.role,
        email: email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const mailUsed = await UserModel.findOne({ email });
    if (mailUsed) {
      return res.status(403).json({ error: "This email has been used before" });
    }
    const hash = bcrypt.hashSync(password, 12);
    const newUser = new UserModel({
      username,
      password: hash,
      email,
      profilePhoto: "http://localhost:3100/static/" + req.static,
    });
    await newUser.save();

    const token = jwt.sign(
      {
        name: username,
        image: newUser.profilePhoto,
        role: newUser.role,
        email: email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
