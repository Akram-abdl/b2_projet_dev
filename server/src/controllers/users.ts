import sha256 from "crypto-js/sha256";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cryptoRandomString from "crypto-random-string";

import User from "../models/user";
import { SECRET_KEY } from "../config";

export const signin = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(404).json({ message: "User don't exist." });

    const isPasswordCorrect = String(sha256(password)) === existingUser.password;

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req: any, res: any) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await sha256(password);
    const passphrase = cryptoRandomString(16);

    const user = await User.create({ name, email, password: hashedPassword, passphrase });

    const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const patchUser = async (req: any, res: any) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

  const updatedUser = { name, email, password };

  await User.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

export const deleteUser = async (req: any, res: any) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

  await User.findByIdAndRemove(id);

  res.json({ message: "User deleted successfully." });
};
