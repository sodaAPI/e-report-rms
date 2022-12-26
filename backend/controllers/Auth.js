import db from "../config/database.js";
import { config } from "../config/auth.config.js";
import User from "../models/userModel.js";
// import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import argon2 from "argon2";

// const Op = db.Sequelize.Op;

// export const signup = (req, res) => {
//   // Save User to Database
//   User.create(req.body)
//     .then((user) => {
//       if (req.body.roles) {
//         User.findAll({
//           where: {
//             name: {
//               [Op.or]: req.body.roles,
//             },
//           },
//         }).then((user) => {

//           user.roles.then(() => {
//             res.send({ message: "User registered successfully!" });
//           });
//         });
//       } else {
//         // user role = 1
//         user.roles([1]).then(() => {
//           res.send({ message: "User registered successfully!" });
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!user)
    return res.status(404).json({ msg: "User not found, Please try again" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Wrong Password" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const username = user.username;
  const role = user.role;
  res.status(200).json({ uuid, name, username, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Please login to your account" });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
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
