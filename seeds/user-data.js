const { User } = require('../models');

const userdata = [
  {
    username: 'user1',
    password: 'pass1',
  },
  {
    username: 'user2',
    password: 'pass2',
  },
  {
    username: 'user3',
    password: 'pass3',
  },
  {
    username: 'user4',
    password: 'pass4',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
