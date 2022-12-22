import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js";

const { DataTypes } = Sequelize;

const Task = db.define(
  "tasks",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Uncompleted",
    },
    description: {
      type: DataTypes.STRING,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(Task);
Task.belongsTo(User, { foreignKey: "userId" });

export default Task;
