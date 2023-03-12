const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
//user and post
User.hasMany(Post, {
    foreignKey: 'user_id',
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
 //user and comment
  User.hasMany(Comment, {
    foreignKey: 'user_id',
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
//post and comment
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });
  
  module.exports = { User, Post, Comment };
  