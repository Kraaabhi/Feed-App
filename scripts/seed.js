const FeedItem = require('../models/feedItems');
const sequelize = require('../db/database');
const feeds=require('../db/feedData.json')

const seed = async () => {
    try {
      // Synchronize the models with the database
      await sequelize.sync({ force: true });
  
      // Insert the data from the JSON file into the database
      await FeedItem.bulkCreate(feeds);
  
      console.log('Data seeded successfully!');
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally {
      // Close the database connection when finished
      await sequelize.close();
    }
  };

  seed();
  