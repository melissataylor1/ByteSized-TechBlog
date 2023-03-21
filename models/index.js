const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//CASCADE = any records that have a foreign key referencing the deleted record will also be deleted
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog, Comment };