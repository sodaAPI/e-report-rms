import db from "../config/database.js";
import { config } from "../config/auth.config.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const Op = db.Sequelize.Op;

export const signup = (req, res) => {
  // Save User to Database
  User.create(req.body)
    .then((user) => {
      if (req.body.roles) {
        User.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((user) => {
          //TODO: Fix User Roles Func
          user.roles.then(() => {
            res.send({ message: "User registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.roles([1]).then(() => {
          res.send({ message: "User registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const signin = (req, res) => {
  const user = User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        console.log("User Not found.");
        return res.status(404).send({ message: "User Not found." });
      }

      if (req.body.password == user.password) {
        var token = Jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 21600, // 6 hours
        });

        //TODO: Add Session Authentication
        //How to add session authentication in nodejs

        // var authorities = [];

        res.status(200).send({
          id: user.id,
          username: user.username,
          password: user.password,
          email: user.email,
          roles: user.roles,
          accessToken: token,
        });
      } else {
        console.log("Invalid Password!");
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
