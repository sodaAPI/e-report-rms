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
    new_existing: {
      type: DataTypes.STRING,
    },
    ip: {
      type: DataTypes.STRING,
    },
    nopcr_ir: {
      type: DataTypes.STRING,
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
    },
    changes: {
      type: DataTypes.STRING,
    },
    programmer: {
      type: DataTypes.STRING,
    },
    bp: {
      type: DataTypes.STRING,
    },
    pm: {
      type: DataTypes.STRING,
    },
    qa: {
      type: DataTypes.STRING,
    },
    sa: {
      type: DataTypes.STRING,
    },
    cmt: {
      type: DataTypes.STRING,
    },
    dependensi: {
      type: DataTypes.STRING,
    },
    keterangan_project: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    nolap_promote: {
      type: DataTypes.STRING,
    },
    tanggal_promote: {
      type: DataTypes.DATE,
    },
    week_eksekusi: {
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
