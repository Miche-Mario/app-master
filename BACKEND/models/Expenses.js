import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ExpensesType from "./ExpensesType.js";

const { DataTypes } = Sequelize;

const Expenses = db.define(
  "expenses",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Expenses;

Expenses.belongsTo(ExpensesType, { foreignKey: "exptype" });
