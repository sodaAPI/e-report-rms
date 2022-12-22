import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js";

const { DataTypes } = Sequelize;

const Report = db.define(
  "reports",
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    project_code: {
      type: DataTypes.STRING,
    },
    promote_name: {
      type: DataTypes.STRING,
    },
    promote_status: {
      type: DataTypes.STRING,
      defaultValue: "In Progress",
    },
    promote_pic: {
      type: DataTypes.STRING,
    },
    promote_desc: {
      type: DataTypes.STRING,
    },
    src_file: {
      type: DataTypes.BLOB,
    },
    changes: {
      type: DataTypes.STRING,
    },
    promote_date: {
      type: DataTypes.DATE,
    },
    execute_week: {
      type: DataTypes.STRING,
    },
    request_week: {
      type: DataTypes.STRING,
    },
    side_promote: {
      type: DataTypes.STRING,
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

User.hasMany(Report);
Report.belongsTo(User, { foreignKey: "userId" });

export default Report;
