import { Sequelize } from "sequelize";

const db = new Sequelize("evlisms", "root", "azerty90", {
  dialect: "mysql",
  port: "3306",
});

export default db;
