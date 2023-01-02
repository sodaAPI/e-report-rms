import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js";

const { DataTypes } = Sequelize;

const Message = db.define(
  "messages",
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    users: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    sender: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default Message;
