import User from "../models/userModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  // Check if user is already logged in
  if (req.session.userId) {
    return res.status(400).json({ msg: "You are already logged in" });
  }
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!user)
    return res.status(404).json({ msg: "User not found, Please try again" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match)
    return res.status(400).json({ msg: "Wrong Password, Please try again" });
  req.session.userId = user.id;
  res.status(200).json({ msg: "You've logged" });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Please login to your account" });
  }
  const user = await User.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user)
    return res.status(404).json({ msg: "User not found, Please try again" });

  res.status(200).json(user);
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err)
      return res
        .status(400)
        .json({ msg: "You cannot logout, please contact the administrator" });
    res.status(200).json({ msg: "You've been logout" });
  });
};
