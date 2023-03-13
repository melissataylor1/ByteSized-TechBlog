const sequelize = require('../config/connection');
const seedUsers = require('./user-data');
const seedPosts = require('./post-data');
const seedComments = require('./comment-data');
//using the Sequelize library to create a database and seed it with data
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments(); 

  process.exit(0);
};

seedAll();
