import { Sequelize } from "sequelize";

const db = new Sequelize("ereport_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "+07:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
