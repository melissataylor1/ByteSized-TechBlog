const { User } = require('../models');

const userdata = [
  {
    username: 'user1',
    password: 'password',
  },
  {
    username: 'user2',
    password: 'password',
  },
  {
    username: 'user3',
    password: 'password',
  },
  {
    username: 'user4',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
