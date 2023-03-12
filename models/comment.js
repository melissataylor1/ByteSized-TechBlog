const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//initializes a Comment model with Sequelize. 
//Dfines columns of Comment table, incl. id column = integer, not nullable, and auto-incrementing.
//Als0 content and post_id columns which are strings and integers respectively.
Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
);