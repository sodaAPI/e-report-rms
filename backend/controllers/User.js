import User from "../models/userModel.js";
import argon2 from "argon2";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const {
    name,
    email,
    username,
    division,
    status,
    birth,
    phone,
    password,
    confPassword,
    roles,
  } = req.body;
  if (password !== confPassword)
    return res.status(400).json({
      msg: "Password and Confirmation Password do not match, Please try again.",
    });
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      username: username,
      division: division,
      status: status,
      birth: birth,
      roles: roles,
      password: hashPassword,
      phone: phone,
    });
    res.status(201).json({ msg: "Register Successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  const {
    name,
    email,
    username,
    division,
    status,
    birth,
    phone,
    password,
    confPassword,
    roles,
  } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confPassword)
    return res.status(400).json({
      msg: "Password and Confirmation Password do not match, Please try again.",
    });
  try {
    if (req.roles === "admin") {
      await User.update(
        {
          name: name,
          email: email,
          username: username,
          division: division,
          status: status,
          birth: birth,
          password: hashPassword,
          phone: phone,
          roles: roles,
        },
        {
          where: {
            id: user.id,
          },
        }
      );
    } else {
      await User.update(
        {
          name: name,
          email: email,
          username: username,
          status: status,
          birth: birth,
          password: hashPassword,
          phone: phone,
        },
        {
          where: {
            id: user.id,
          },
        }
      );
    }
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  try {
    await User.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: "User Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
