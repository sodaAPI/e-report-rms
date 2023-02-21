import User from "../models/userModel.js";
import argon2 from "argon2";
import nodemailer from "nodemailer";
import randtoken from "rand-token";

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
        uuid: req.params.uuid,
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

export const forgotPassword = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  console.log(user.name);
  if (!user)
    return res
      .status(404)
      .json({ msg: "Email not recognized, Please try again." });
  const token = randtoken.generate(20);
  try {
    await User.update(
      {
        token: token,
      },
      {
        where: {
          email: req.body.email,
        },
      }
    );
    const transporter = nodemailer.createTransport({
      secure: true,
      host: `${process.env.EMAIL_HOST}`,
      port: `${process.env.EMAIL_PORT}`,
      auth: {
        user: `${process.env.EMAIL_API}`,
        pass: `${process.env.PASSWORD_API}`,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    let message =
      ` <tr><td><h1>Hello ${user.name}/${user.username},</h1></td></tr>
    <tr><td><h2>This is from Bank BTN E-Report Management System</h2></td></tr>
    <h2>We have noticed that you forgot your password, ignore this message if you didn't forgot your password
    </h2><h2>Click Link below to change your password</h2>
    <tr><td><h2><a href=${process.env.URL_ORIGIN}/reset-password/` +
      token +
      `><b>Click Here !</b></a></h2></td></tr>`;

    transporter
      .sendMail({
        from: `${process.env.EMAIL_API}`,
        to: `${req.body.email}`,
        subject: "Change Password - BTN E-Report Management System",
        html: message,
      })
      .then(console.info)
      .catch(console.error);

    res.status(200).json({ msg: "Email sent" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const user = await User.findOne({
    where: {
      token: req.params.token,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  const { password, confPassword } = req.body;
  if (password !== confPassword)
    return res.status(400).json({
      msg: "Password and Confirmation Password do not match, Please try again.",
    });
  const hashPassword = await argon2.hash(password);
  const token = randtoken.generate(20);
  try {
    await User.update(
      {
        password: hashPassword,
        token: token,
      },
      {
        where: {
          uuid: user.uuid,
        },
      }
    );
    res.status(200).json({ msg: "Password Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.uuid,
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
            uuid: user.uuid,
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
            uuid: user.uuid,
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
      uuid: req.params.uuid,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  try {
    await User.destroy({
      where: {
        uuid: user.uuid,
      },
    });
    res.status(200).json({ msg: "User Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
