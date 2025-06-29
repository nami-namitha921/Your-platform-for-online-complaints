import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const genToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (await User.findOne({ email })) return res.status(400).json({ msg: "User exists" });

  const user = await User.create({ name, email, password });
  res.json({
    token: genToken(user._id),
    user: { id: user._id, name, email }
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  res.json({ token: genToken(user._id), user: { id: user._id, name: user.name, email } });
};
