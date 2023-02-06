import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
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
  req.userId = user.id;
  req.email = user.email;
  req.roles = user.roles;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user)
    return res.status(404).json({ msg: "User not found, Please try again" });
  if (user.roles !== "admin")
    return res.status(403).json({ msg: "Unauthorized Access" });
  next();
};

export const unauthorizedGuest = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user)
    return res.status(404).json({ msg: "User not found, Please try again" });
  if (user.division === "Guest")
    return res.status(403).json({ msg: "Unauthorized Access" });
  next();
};
