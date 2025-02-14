import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signupController = async (req, res) => {
  try {
    console.log("controller", req.body);
    const { username, email, password, fullName, gender, dob, country } =
      req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      fullName,
      gender,
      dob,
      country,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({ token, user: { id: newUser._id, username } });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
