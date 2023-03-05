const FeedItem = require("../src/models/feedItems");
const sequelize = require("../src/db/database");
const feeds = require("../src/db/feedData.json");

const seed = async () => {
  try {
    // Synchronize the models with the database
    await sequelize.sync({ force: true });

    // Insert the data from the JSON file into the database
    await FeedItem.bulkCreate(feeds);

    console.log("Data seeded successfully!");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    // Close the database connection when finished
    await sequelize.close();
  }
};

seed();
