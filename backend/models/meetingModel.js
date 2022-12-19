import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Meeting = db.define(
  "meetings",
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    meeting_name: {
      type: DataTypes.STRING,
    },
    meeting_desc: {
      type: DataTypes.STRING,
    },
    online_meeting_link: {
      type: DataTypes.STRING,
    },
    meeting_date: {
      type: DataTypes.DATE,
    },
    edited_by: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Meeting;
