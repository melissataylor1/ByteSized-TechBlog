const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1',
    content: 'Content 1',
    user_id: 1,
  },
  {
    title: 'Post 2',
    content: 'Content 2',
    user_id: 2,
  },
  {
    title: 'Post 3',
    content: 'Content 3',
    user_id: 3,
  },
  {
    title: 'Post 4',
    content: 'Content 4',
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
