import User from "../models/User.js";

export const searchUserController = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query)
      return res.status(400).json({ message: "Search query is required" });

    const user = await User.findOne({
      $or: [{ username: query }, { email: query }],
    }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
