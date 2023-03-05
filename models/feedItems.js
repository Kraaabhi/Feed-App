const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const FeedItem = sequelize.define('FeedItem', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dateLastEdited: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = FeedItem;