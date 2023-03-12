const { Post } = require('../models');

const postdata = [
  {
    title: 'Why Orange Cats are the BEST',
    content: 'BLAH BLAH BLAH',
    user_id: 1,
  },
  {
    title: 'Brown Butter Chocolate Chip Cookie Recipe',
    content: '1 CUP FLOUR, 1 CUP SUGAR, 1/2 CUP BROWN BUTTER',
    user_id: 2,
  },
  {
    title: 'iPhone or Android?',
    content: 'BLAH BLAH BLAH',
    user_id: 3,
  },
  {
    title: 'Example 4',
    content: 'Content 4',
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
