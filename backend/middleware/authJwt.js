import Jwt from "jsonwebtoken";
import { config } from "../config/auth.config.js";
import User from "../models/userModel.js";

export const verifyToken = (req, res, next) => {
  let accessToken = req.headers;

  if (!accessToken) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  Jwt.verify(accessToken, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  User.roles(req.params.id).then((user) => {
    user.roles().then((user) => {
      for (let i = 0; i < user.length; i++) {
        if (user[i].roles === "admin") {
          next();
          console.log(user)
          return;
        }
      }
      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

export const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};

export default authJwt;
