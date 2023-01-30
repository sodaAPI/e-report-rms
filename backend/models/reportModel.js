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
      defaultValue: "-",
    },
    new_existing: {
      type: DataTypes.STRING,
    },
    ip: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    nopcr_ir: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    nama: {
      type: DataTypes.STRING,
    },
    user_division: {
      type: DataTypes.STRING,
    },
    core_noncore: {
      type: DataTypes.STRING,
    },
    detail_deploy: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    changes: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    programmer: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    bp: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    pm: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    qa: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    sa: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    cmt: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    dependensi: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    status: {
      type: DataTypes.STRING,
    },
    nolap_promote: {
      type: DataTypes.STRING,
      defaultValue: "-",
    },
    tanggal_promote: {
      type: DataTypes.DATE,
    },
    week_eksekusi: {
      type: DataTypes.STRING,
    },
    week_request: {
      type: DataTypes.STRING,
    },
    risk_summary: {
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
    timestamps: true,
    freezeTableName: true,
  }
);

User.hasMany(Report);
Report.belongsTo(User, { foreignKey: "userId" });

export default Report;
