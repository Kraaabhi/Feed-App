const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "src/config/config.env" });

const DATABASE_URL = process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});
sequelize.sync();

module.exports = sequelize;
