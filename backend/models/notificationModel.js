import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js";
import Task from "./taskModel.js";
import Meeting from "./meetingModel.js"

const { DataTypes } = Sequelize;

const Notification = db.define(
  "notifications",
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    notifmsg: {
      type: DataTypes.STRING,
    },
    taskId: {
      type: DataTypes.INTEGER,
    },
    meetingId: {
      type: DataTypes.INTEGER,
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
    timestamps: true,
    freezeTableName: true,
  }
);

User.hasMany(Notification);
Notification.belongsTo(User, { foreignKey: "userId" });

Task.hasMany(Notification);
Notification.belongsTo(Task, { foreignKey: "taskId" });

Meeting.hasMany(Notification);
Notification.belongsTo(Meeting, { foreignKey: "meetingId" });

export default Notification;
