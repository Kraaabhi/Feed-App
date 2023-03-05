const { Sequelize } = require('sequelize');
const temp="postgres://caxdbped:lHVjOIbgtbXhy5gW_VUC6UBrUXLqTA9Q@isilo.db.elephantsql.com/caxdbped"
const DATABASE_URL = process.env.DATABASE_URL||temp;
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});
sequelize.sync();

module.exports = sequelize;
